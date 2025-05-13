<template>
    <h1 class="h3 mb-4 d-flex align-items-center gap-2">
      <i class="bi bi-hdd-rack text-primary fs-1"></i>
      Áreas
    </h1>
  
    <div class="data-table">
      <div class="header">
        <div class="search-box">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Buscar..."
            class="search-input"
          />
          <button class="btn-add" @click="openModal">Agregar +</button>
        </div>
  
        <div class="pagination">
          <span>Página {{ currentPage }} de {{ totalPages }}</span>
          <select v-model="currentPage" class="pagination-select">
            <option v-for="page in totalPages" :key="page" :value="page">
              {{ page }}
            </option>
          </select>
        </div>
      </div>
  
      <Modal
        :visible="modalOpen"
        :title="'Agregar Sucursal'"
        @close="closeModal"
      >
        <UserForm
          :isOpen="modalOpen"
          :user="user"
          @save="saveUser"
          @close="closeModal"
        />
      </Modal>
  
      <!-- Tabla -->
      <table class="table table-striped">
        <thead>
          <tr class="backgroung-tr">
            <th class="id-column">#</th>
            <th class="name-column">Área</th>
            <th class="desc-column">Estatus</th>
            <th class="desc-column">Fecha</th>
            <th class="desc-column">Usuario</th>
            <th class="icon-column">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in paginatedData" :key="item.id">
            <td class="id-column">{{ item.id }}</td>
            <td class="name-column">{{ item.area }}</td>
            <td class="desc-column">{{ item.status }}</td>
            <td class="desc-column">{{ item.date }}</td>
            <td class="desc-column">{{ item.user }}</td>
            <td class="icon-column">
              <button class="btn btn-danger btn-sm" style="margin-right: 8px">
                <i class="bi bi-trash3-fill"></i>
              </button>
              <button class="btn btn-success btn-sm">
                <i class="bi bi-pencil-square"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from "vue";
 
  
  const data = ref([
    { id: 1, area: "Gerencia", status: "A", date: "29/04/2025", user: "Administrador" },
    { id: 2, area: "Recursos Humanos", status: "A", date: "29/04/2025", user: "Administrador" },
    { id: 3, area: "Desarrollo", status: "A", date: "29/04/2025", user: "Administrador" },
    { id: 4, area: "Ventas", status: "A", date: "29/04/2025", user: "Administrador" },
    { id: 5, area: "Finanzas", status: "A", date: "29/04/2025", user: "Administrador" },
    { id: 6, area: "Contabilidad", status: "A", date: "29/04/2025", user: "Administrador" },
    { id: 7, area: "Operaciones", status: "A", date: "29/04/2025", user: "Administrador" },
    { id: 8, area: "Agencia Aduanal", status: "A", date: "29/04/2025", user: "Administrador" },
  ]);
  
  const searchQuery = ref("");
  const itemsPerPage = 10;
  const currentPage = ref(1);
  
  const filteredData = computed(() => {
  if (!searchQuery.value) return data.value;
  return data.value.filter((item) =>
    item.sucursal.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

  
  const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredData.value.slice(start, end);
  });
  
  const totalPages = computed(() => {
    return Math.ceil(filteredData.value.length / itemsPerPage);
  });
  </script>
  
  
  <style scoped>
  .data-table {
    width: 100%;
    margin: 20px 0;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .backgroung-tr {
    background-color: #007bff73;
  }
  
  .search-box {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  
  .search-input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .btn-add {
    background-color: #0B4269;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .pagination-select {
    padding: 0 5px;
    margin-left: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  .table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .table th {
    background-color: #0B4269;
    color: white;
    padding: 12px;
    text-align: left;
  }
  
  .table td {
    padding: 12px;
    border: 1px solid #ddd;
    text-align: left;
  }

  .id-column {
    width: 5%;
    text-align: center;
  }

  .name-column {
    width: 25%;
  }
  
  .desc-column {
    width: 12%;
  }
  
  .icon-column {
    width: 10%;
    text-align: center;
  }

  </style>