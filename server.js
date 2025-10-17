import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint principal para consultar por documento
app.post("/buscar", async (req, res) => {
  try {
    const { tipoDocumento, numeroDocumento } = req.body;

    if (!tipoDocumento || !numeroDocumento) {
      return res.status(400).json({ error: "Faltan parámetros requeridos" });
    }

    // Aquí podrías conectar con ADRES, Registraduría o una base simulada
    // Por ahora simulamos una respuesta de prueba
    const respuesta = {
      tipoDocumento,
      numeroDocumento,
      nombre: "JHONATAN CARDONA VELASQUEZ",
      fechaNacimiento: "1995-04-22",
      entidad: "EPS SURA",
    };

    res.json(respuesta);
  } catch (error) {
    console.error("Error en /buscar:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
