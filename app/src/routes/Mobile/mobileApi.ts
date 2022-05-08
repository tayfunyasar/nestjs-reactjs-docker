import Axios from 'axios';
import { ActionTypes, MobileEntity } from './types';

const { REACT_APP_BASE_URL } = process.env;

export const getMobileApi = () => Axios.get<MobileEntity[]>(`${REACT_APP_BASE_URL}/mobile`);

export const addMobileApi = (_entity: MobileEntity) => Axios.post(`${REACT_APP_BASE_URL}/mobile`, _entity);

export const updateMobileApi = (_entity: MobileEntity) => Axios.put(`${REACT_APP_BASE_URL}/mobile/${_entity.id}`, _entity);