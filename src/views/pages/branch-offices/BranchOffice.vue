<template>
  <CardContainer>
    <DataTable
      tableTitle="Sucursales"
      tableIcon="bi-bank"
      :data="items"
      :columns="columns"
      :search="search"
      :perPage="perPage"
      :currentPage="currentPage"
      :showEdit="true"
      :showDelete="true"
      :showStatus="true"
      @update:search="search = $event"
      @update:perPage="perPage = $event"
      @update:currentPage="currentPage = $event"
      @create="handleCreate"
      @edit="editItem"
      @delete="deleteItem"
    />
    <ModalCreateEdit :visible="showModal" @close="showModal = false" />
  </CardContainer>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CardContainer from '@/components/utils/CardContainer.vue';
import DataTable from '@/components/data-table/DataTable.vue';
import { usePageTitle } from '@/composables/usePageTitle.js';
import ModalCreateEdit from './components/ModalCreateEdit.vue';

const pageTitle = usePageTitle();
const showModal = ref(false);

const search = ref('');
const perPage = ref(10);
const currentPage = ref(1);

//datos simulados
const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Nombre' },
  { key: 'phone', label: 'Telefono' },
  { key: 'address', label: 'Direccion' },
  { key: 'zip_code', label: 'Codigo Postal' },

];

const items = ref([
  {
    id: 1,
    name: 'Sucursal Centro',
    phone: '555-1234',
    address: 'Av. Principal 123',
    zip_code: '12345',
    status: 1,
  },
  {
    id: 2,
    name: 'Sucursal Norte',
    phone: '555-5678',
    address: 'Calle Norte 456',
    zip_code: '67890',
    status: 0,
  },
]);


//funciones de acciones
function handleCreate() {
  showModal.value = true;
}

function editItem(item) {
  alert('Editar sucrsal: ' + item.name);
}

function deleteItem(item) {
  alert('Eliminar sucrsal: ' + item.name);
}

onMounted(() => (pageTitle.value = 'Sucursales'));
</script>
