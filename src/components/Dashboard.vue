<script setup>
import ChartBar from './BarChart.vue'
import ChartLine from './LineChart.vue'
import ChartPie from './PieChart.vue'

</script>

<template>
  <div class="dashboard-container flex-wrapper ">
      <div class="dashboard-content scrollable">
        <h1 class="welcome text-3xl font-bold flex items-center gap-2">
          <i class="bi bi-bar-chart-fill text-blue-600 text-4xl"></i>
          Bienvenida al Dashboard 🎯
        </h1>


        <!-- RESUMEN GENERAL -->
        <section id="dashboard">
          <h2 class="section-title text-xl font-semibold text-gray-700 border-b-2 border-gray-200 pb-2 mb-4 flex items-center gap-2">
            <i class="bi bi-graph-up-arrow text-blue-500"></i>
            Resumen General
          </h2>

          <div class="card-grid ">
            <div class="summary-card accepted">
              <h3>Contratos Aceptados</h3>
              <p class="card-number">23</p>
            </div>
            <div class="summary-card in-contract">
              <h3>En Contrato</h3>
              <p class="card-number">15</p>
            </div>
            <div class="summary-card expiring">
              <h3>Por Expirar</h3>
              <p class="card-number">4</p>
            </div>
            <div class="summary-card finished">
              <h3>Finalizados</h3>
              <p class="card-number">10</p>
            </div>
          </div>

          <div class="charts-grid flex-wrapper ">
            <div class="chart-card ">
              <h3>Estados de Contrato 🥧</h3>
              <ChartPie />
            </div>
            <div class="chart-card h-100 flex-wrapper">
              <h3>Resumen Mensual 📈</h3>
              <ChartLine />
            </div>
            <div class="chart-card h-100 flex-wrapper">
              <ChartBar />
            </div>
          </div>
        </section>
        <hr class="my-8 border-t border-gray-300" />

        <!-- CONTRATACIONES -->
        <section id="contrataciones">
          <h2 class="section-title"><i class="bi bi-person-badge-fill text-green-500">Contrataciones</i></h2>
          <div class="card-grid flex-wrapper ">
            <div class="summary-card accepted">
              <h3>Contratos Aceptados</h3>
              <p class="card-number">23</p>
            </div>
          </div>
          <div class="charts-grid flex-wrapper ">
            <div class="chart-card">
              <h3>Estados de Contrato 🥧</h3>
              <ChartPie />
            </div>
            <div class="chart-card h-100">
              <h3>Resumen Mensual 📈</h3>
              <ChartLine />
            </div>
          </div>
        </section>
        <hr class="my-8 border-t border-gray-300" />

        <!-- EMPLEADOS -->
        <section id="empleados">
          <h2 class="section-title"><i class="bi bi-people-fill text-purple-500">Empleados</i></h2>
          <div class="card-grid flex-wrapper ">
            <div class="summary-card in-contract">
              <h3>Nuevos Ingresos</h3>
              <p class="card-number">15</p>
            </div>
          </div>
          <div class="charts-grid flex-wrapper ">
            <div class="chart-card">
              <h3>Nuevos Ingresos 🥧</h3>
              <ChartPie />
            </div>
            <div class="chart-card h-100">
              <ChartLine />
            </div>
          </div>
        </section>
        <hr class="my-8 border-t border-gray-300" />

        <!-- EVALUACIONES -->
        <section id="evaluaciones">
          <h2 class="section-title"><i class="bi bi-clipboard-data text-orange-500">Evaluaciones</i></h2>
          <div class="card-grid flex-wrapper">
            <div class="summary-card expiring">
              <h3>Vacantes a Cubrir</h3>
              <p class="card-number">4</p>
            </div>
          </div>
          <div class="charts-grid flex-wrapper ">
            <div class="chart-card">
              <h3>Vacantes a Cubrir 🥧</h3>
              <ChartPie />
            </div>
            <div class="chart-card h-100">
              <ChartLine />
            </div>
          </div>
        </section>
        <hr class="my-8 border-t border-gray-300" />


        <!-- NOMINA -->
        <section id="nomina">
          <h2 class="section-title"><i class="bi bi-currency-dollar text-teal-500">Nómina</i>

            </h2>
          <div class="card-grid flex-wrapper">
            <div class="summary-card finished">
              <h3>Ingresos y Egresos</h3>
              <p class="card-number">10</p>
            </div>
          </div>
          <div class="charts-grid flex-wrapper ">
            <div class="chart-card">
              <h3>Ingresos y Egresos 🥧</h3>
              <ChartPie />
            </div>
            <div class="chart-card h-100">
              <ChartLine />
            </div>
          </div>
        </section>
        <hr class="my-8 border-t border-gray-300" />

        <!-- TICKETS -->
        <section id="tickets">
          <h2 class="section-title"><i class="bi bi-ticket-detailed text-pink-500">Tickets</i></h2>
          <div class="card-grid flex-wrapper">
            <div class="summary-card finished">
              <h3>Actividades</h3>
              <p class="card-number">10</p>
            </div>
          </div>
          <div class="charts-grid flex-wrapper ">
            <div class="chart-card">
              <h3>Actividades 🥧</h3>
              <ChartPie />
            </div>
            <div class="chart-card h-100">
              <ChartLine />
            </div>
          </div>
        </section>
      </div>
    </div>

</template>


<style scoped>
.dashboard-container{
  width: 150vh;
}
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.section-title {
  animation: fadeSlideIn 0.8s ease-in-out forwards;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes fadeSlideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
  .summary-card {
    background: linear-gradient(to bottom right, #f8fafc, #ffffff);
    border-radius: 1rem;
    padding: 1.5rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
    text-align: center;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }


.summary-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}
.card-number {
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 0.5rem;
}
.accepted {
  border-left: 6px solid #10b981; /* verde */
}

.in-contract {
  border-left: 6px solid #3b82f6; /* azul */
}

.expiring {
  border-left: 6px solid #f59e0b; /* naranja */
}

.finished {
  border-left: 6px solid #9ca3af; /* gris */
}
.chart-card {
  background: #ffffff;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.5s ease;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s forwards;
}

.chart-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}


.flex-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap:2rem;
  margin-top: 2rem;

}

/* Animación Fade In + Up */
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
:root {
  --primary: #1e3a8a; /* azul empresarial */
  --accent: #3b82f6;
  --background: #f9fafb;
  --card-bg: rgba(255, 255, 255, 0.9);
  --text-title: #1f2937;
  --text-muted: #6b7280;
  --border-light: rgba(0, 0, 0, 0.05);
}

.dashboard-container {
  background: var(--background);
  padding: 2rem;
  border-radius: 2rem;
  box-shadow: inset 0 0 10px rgba(0,0,0,0.03);
  font-family: 'Inter', sans-serif;
}

.welcome {
  font-size: 2.2rem;
  color: var(--text-title);
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.section-title {
  font-size: 1.5rem;
  color: var(--primary);
  margin-top: 3rem;
  font-weight: 600;
  border-bottom: 2px solid var(--border-light);
  padding-bottom: 0.5rem;
}

.summary-card {
  background: var(--card-bg);
  backdrop-filter: blur(6px);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  text-align: left;
  transition: all 0.3s ease-in-out;
  border: 1px solid var(--border-light);
}

.summary-card h3 {
  font-size: 1rem;
  color: var(--text-muted);
}

.summary-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
}

.card-number {
  font-size: 2.8rem;
  font-weight: bold;
  color: var(--text-title);
  margin-top: 0.5rem;
}

.chart-card {
  background: var(--card-bg);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 400px;
  min-height: 300px;
  transition: all 0.3s ease-in-out;
  border: 1px solid var(--border-light);
}

.chart-card h3 {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--primary);
  margin-bottom: 1rem;
}

.chart-card:hover {
  transform: scale(1.02);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.flex-wrapper {
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-around;
}

.card-grid {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

</style>
