<template>
  <h1 class="h3 mb-4 d-flex align-items-center gap-2">
    <i class="bi bi-person text-primary fs-1"></i>
    Usuarios
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
      :title="'Agregar Usuario'"
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
          <th class="name-column">Nombre Usuario</th>
          <th class="name-column">Password</th>
          <th class="desc-column">Estatus</th>
          <th class="desc-column">Perfil</th>
          <th class="desc-column">Fecha</th>
          <th class="icon-column">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in paginatedData" :key="item.id">
          <td class="name-column">{{ item.user }}</td>
          <td class="name-column">{{ item.password }}</td>
          <td class="desc-column">{{ item.status }}</td>
          <td class="desc-column">{{ item.profile }}</td>
          <td class="desc-column">{{ item.date }}</td>
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
import Modal from "@/components/modals/Modal.vue";
import UserForm from "@/components/Forms/FormUser.vue";

const modalOpen = ref(false);

const user = ref({
  username: '',
  password: '',
  status: '',
  profile: ''
});

const openModal = () => {
  modalOpen.value = true;
};

const closeModal = () => {
  modalOpen.value = false;
  resetUser();
};

const saveUser = (newUser) => {
  console.log("Usuario guardado:", newUser);
  modalOpen.value = false;
};

const resetUser = () => {
  user.value = {
    username: '',
    password: '',
    status: '',
    profile: ''
  };
};


const data = ref([
  { id: 1, user: "MARFV", password: "fasdf4tfsdfvs", status: "A", profile: "Administrador", date: "29/04/2025" },
  { id: 2, user: "JOVIEDOR", password: "fasdf4tfsdfvs", status: "A", profile: "Administrador", date: "29/04/2025" },
  { id: 3, user: "USER2", password: "fasdf4tfsdfvs", status: "A", profile: "Administrador", date: "29/04/2025" },
  { id: 4, user: "FEDER", password: "fasdf4tfsdfvs", status: "A", profile: "Administrador", date: "29/04/2025" },
  { id: 5, user: "DHANH", password: "fasdf4tfsdfvs", status: "A", profile: "Administrador", date: "29/04/2025" },
]);

const searchQuery = ref("");
const itemsPerPage = 10;
const currentPage = ref(1);

const filteredData = computed(() => {
  return data.value.filter((item) =>
    item.user.toLowerCase().includes(searchQuery.value.toLowerCase())
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