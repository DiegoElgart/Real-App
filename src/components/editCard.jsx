import React from "react";
import Form from "./common/form";
import PageHeader from "./common/pageHeader";
import Joi from "joi-browser";
import cardService from "../services/cardService";
import { toast } from "react-toastify";

class EditCard extends Form {
  state = {
    data: {
      bizName: "",
      bizDescription: "",
      bizAddress: "",
      bizPhone: "",
      bizImage: "",
    },
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    bizName: Joi.string().min(2).max(255).required(),
    bizDescription: Joi.string().min(2).max(1024).required(),
    bizAddress: Joi.string().min(2).max(400).required(),
    bizPhone: Joi.string()
      .min(9)
      .max(10)
      .required()
      .regex(/^0[2-9]\d{7,8}$/),
    bizImage: Joi.string().min(11).max(1024).uri().allow(""),
  };

  mapToViewModel(card) {
    return {
      _id: card._id,
      bizName: card.bizName,
      bizDescription: card.bizDescription,
      bizAddress: card.bizAddress,
      bizPhone: card.bizPhone,
      bizImage: card.bizImage,
    };
  }

  async componentDidMount() {
    const cardId = this.props.match.params.id;
    const { data } = await cardService.getCard(cardId).then((resp) => {
      return resp;
    });
    this.setState({ data: this.mapToViewModel(data) });
  }

  async doSubmit() {
    const { data } = this.state;
    cardService.editCard(data);
    toast("Card is updated!");
    this.props.history.replace("/my-cards");
  }

  handleCancel = () => {
    this.props.history.replace("/my-cards");
  };

  render() {
    return (
      <div className='container'>
        <PageHeader titleText='Create a business card' />
        <div className='row'>
          <div className='col-12'>
            <p>Edit business card</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-6'>
            <form onSubmit={this.handleSubmit} autoComplete='off'>
              {this.renderInput("bizName", "Business Name")}
              {this.renderInput("bizDescription", "Business Description")}
              {this.renderInput("bizAddress", "Business Address")}
              {this.renderInput("bizPhone", "Business Phone")}
              {this.renderInput("bizImage", "Business Image")}
              {this.renderButton("Update Card")}
              <button
                className='btn btn-secondary ml-2'
                onClick={this.handleCancel}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditCard;
