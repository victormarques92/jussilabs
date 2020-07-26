import { dogs, successCallback, failureCallback } from '../api'

export const loadDogs = async (cep) => {
	return dogs()
		.get(`${cep}/images`)
		.then(successCallback)
		.catch(failureCallback)
}
