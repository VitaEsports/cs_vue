import apiClient from '@/utils/api'
import { useTestStore } from '@/stores/store';



async function getTest() {
    const store = useTestStore()
    const response = await apiClient.get("status");
    store.test = response.data['message']
}

export {
    getTest,
}