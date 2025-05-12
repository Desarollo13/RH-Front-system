<template>
  <CardContainer>
    <DataTable
      tableTitle="Usuarios Registrados"
      tableIcon="bi-people-fill"
      :data="items"
      :columns="columns"
      :search="search"
      :perPage="perPage"
      :currentPage="currentPage"
      :showEdit="true"
      :showDelete="true"
      @update:search="search = $event"
      @update:perPage="perPage = $event"
      @update:currentPage="currentPage = $event"
      @create="handleCreate"
      @edit="editItem"
      @delete="deleteItem"
    />
  </CardContainer>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CardContainer from '@/components/utils/CardContainer.vue';
import DataTable from '@/components/data-table/DataTable.vue';
import { usePageTitle } from '@/composables/usePageTitle.js';

const pageTitle = usePageTitle();
onMounted(() => (pageTitle.value = 'Ejemplo'));

const search = ref('');
const perPage = ref(10);
const currentPage = ref(1);

//datos simulados
const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Nombre' },
  { key: 'email', label: 'Email' },
];

const items = ref([
  { id: 1, name: 'Juan Pérez', email: 'juan@example.com' },
  { id: 2, name: 'Ana Gómez', email: 'ana@example.com' },
  { id: 3, name: 'Carlos Ruiz', email: 'carlos@example.com' },
]);

//funciones de acciones
function handleCreate() {
  alert('Crear nuevo usuario');
}

function editItem(item) {
  alert('Editar usuario: ' + item.name);
}

function deleteItem(item) {
  alert('Eliminar usuario: ' + item.name);
}
</script>
