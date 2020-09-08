import http from "./httpService";
import { apiUrl } from "../config.json";

export function getCard(cardId) {
  return http.get(`${apiUrl}/cards/${cardId}`);
}

export function editCard(card) {
  const { _id: cardId, ...bodyCard } = card;
  return http.put(`${apiUrl}/cards/${cardId}`, bodyCard);
}
export function deleteCard(cardId) {
  return http.delete(`${apiUrl}/cards/${cardId}`);
}
export function createCard(card) {
  return http.post(`${apiUrl}/cards`, card);
}

export function getMyCards() {
  return http.get(`${apiUrl}/cards/my-cards`);
}

export default {
  getMyCards,
  createCard,
  getCard,
  editCard,
  deleteCard,
};
