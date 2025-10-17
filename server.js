import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// 🔹 Ruta principal de consulta
app.get("/consulta/:documento", async (req, res) => {
  const { documento } = req.params;

  try {
    // Ejemplo de llamada al endpoint público o mock temporal
    // ⚠️ Aquí puedes reemplazar con el endpoint real o tu propia base
    const url = `https://api.sispro.gov.co/consulta/${documento}`;

    // Simulación de respuesta (puedes reemplazar con axios.get(url))
    const mockResponse = {
      documento,
      tipo_documento: "CC",
      fecha_nacimiento: "1990-05-14",
      nombres: "Juan Carlos",
      apellidos: "Pérez Gómez"
    };

    res.json({
      success: true,
      data: mockResponse
    });
  } catch (error) {
    console.error("Error en la consulta:", error.message);
    res.status(500).json({
      success: false,
      message: "Error al consultar la información",
      error: error.message
    });
  }
});

// 🔹 Puerto dinámico para EasyPanel
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});

