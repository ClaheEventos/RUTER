"use client";

import { useState, MouseEvent, FormEvent } from "react";

function Gracias() {
  return (
    <div
    >
      <h2>¡Gracias!</h2>
      <h2>recorda seguirnos</h2>
       <h2>en nuestras redes</h2>

      
<div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px", alignItems: "center" }}>
  <a
    href="https://www.instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <img
      src="/RUTER/instagram.svg"
      alt="Instagram"
      style={{ width: "100px", height: "100px", cursor: "pointer" }}
    />
  </a>

  <a
    href="https://www.tiktok.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="TikTok"
  >
    <img
      src="/RUTER/tiktok.svg"
      alt="TikTok"
      style={{ width: "100px", height: "100px", cursor: "pointer" }}
    />
  </a>
</div>
    </div>
  );
}

export default function FormularioWifi() {
  const [aceptado, setAceptado] = useState<boolean>(false);
  const [modalAbierto, setModalAbierto] = useState<boolean>(false);
  const [enviado, setEnviado] = useState<boolean>(false);

  const openModal = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setModalAbierto(true);
  };

  const closeModal = () => setModalAbierto(false);

  const aceptarTerminos = () => {
    setAceptado(true);
    closeModal();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    fetch(
      "https://script.google.com/macros/s/AKfycbzB0s1UgyZjj8vsjB3gPrdrPSCtDQ3PpTcqW4Sd3e7sCskrIkop3w8jG0-E5hKuM-E7ow/exec",
      {
        method: "POST",
        body: formData,
      }
    ).catch((error) => {
      console.error("Error enviando formulario:", error);
    });

    setEnviado(true); // Cambio de estado para mostrar Gracias
  };

  if (enviado) {
    return <Gracias />;
  }

  return (
    <div>

      <h3>Por favor, completá tus datos para conectarte.</h3>

      <form onSubmit={handleSubmit}>
  <div>
    <label htmlFor="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required />
  </div>

  <div>
    <label htmlFor="edad">Edad:</label>
    <input type="number" id="edad" name="edad" required />
  </div>

  <div>
    <label htmlFor="telefono">Teléfono:</label>
    <input type="tel" id="telefono" name="telefono" required />
  </div>

  <div>
    <label>
      Acepto los{" "}
      <a href="#" onClick={openModal}>
        Términos y Condiciones
      </a>
      <input
        type="checkbox"
        checked={aceptado}
        onChange={(e) => setAceptado(e.target.checked)}
      />
    </label>
  </div>

  <div>
    <button type="submit" disabled={!aceptado}>
      Conectarme
    </button>
  </div>
</form>

      {modalAbierto && (
        <div
          className="modal"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h2>Términos y Condiciones de Uso del wifi</h2>
            </div>

            <div className="modal-body">
              <p>
                <strong>Última actualización:</strong> Julio de 2025
              </p>
              <p>
                Por favor, lea atentamente los siguientes Términos y Condiciones antes de utilizar este sitio web. 
                Al acceder o utilizar nuestro sitio, usted acepta quedar legalmente obligado por estos términos.
              </p>

              <h3>1. Identificación del titular</h3>
              <p>
                CLAHE EVENTOS SRL es una empresa dedicada a la prestación de servicios para la organización de eventos 
                sociales y familiares, como cumpleaños, casamientos, bautismos, aniversarios, entre otros. 
                Nuestros salones se encuentran ubicados en la zona sur de la Provincia de Buenos Aires.
              </p>
              <p>
                <strong>Razón social:</strong> CLAHE EVENTOS
                <br />
                <strong>Domicilio legal:</strong> Avenida Mitre N° 6549, Wilde
                <br />
                <strong>Correo electrónico de contacto:</strong> Legales@claheeventos.com
              </p>

              
 <h3>3. Aceptación de los Términos</h3>
    <p>El uso del sitio por parte del usuario implica la aceptación plena y sin reservas de los presentes Términos y Condiciones. En caso de no estar de acuerdo, le solicitamos que se abstenga de utilizar el sitio.</p>

    <h3>4. Servicios ofrecidos</h3>
    <p>CLAHE EVENTOS ofrece la contratación de salones para eventos sociales, con o sin servicios adicionales (catering, decoración, animación, etc.). Las características de cada salón y servicio adicional están detalladas en el sitio y/o se comunican al momento de la contratación.</p>

    <h3>5. Reservas y contrataciones</h3>
    <p>Las reservas de fechas se encuentran sujetas a disponibilidad y deben ser confirmadas por parte del equipo de CLAHE EVENTOS. Para garantizar una fecha, podrá exigirse el pago de una seña o anticipo, cuyas condiciones serán informadas oportunamente. El saldo deberá abonarse según los plazos acordados al momento de la contratación. CLAHE EVENTOS se reserva el derecho de cancelar reservas no confirmadas o no abonadas en tiempo y forma.</p>

    <h3>6. Cancelaciones y devoluciones</h3>
    <p>Las políticas de cancelación serán informadas al momento de la reserva y podrán variar según el tipo de evento y los servicios contratados.</p>

    <h3>7. Uso del sitio web</h3>
    <p>El usuario se compromete a utilizar el sitio de manera lícita y responsable. Queda prohibido: realizar reservas falsas o fraudulentas, proporcionar información falsa o incompleta, interferir con el funcionamiento del sitio o intentar acceder a áreas restringidas.</p>

    <h3>8. Propiedad intelectual</h3>
    <p>Todo el contenido del sitio (textos, imágenes, logos, diseños, videos, software, etc.) es propiedad de CLAHE EVENTOS SRL o cuenta con licencia para su uso. Queda prohibida su reproducción total o parcial sin autorización expresa.</p>

    <h3>9. Limitación de responsabilidad</h3>
    <p>CLAHE EVENTOS no garantiza la disponibilidad continua del sitio ni se responsabiliza por posibles interrupciones, errores o daños derivados del uso del mismo. Tampoco será responsable por decisiones tomadas por el usuario basadas en la información publicada.</p>

    <h3>10. Modificaciones</h3>
    <p>Nos reservamos el derecho de modificar los presentes Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigencia desde su publicación en el sitio. Se recomienda revisar periódicamente esta sección.</p>

    <h3>11. Protección de datos personales</h3>
    <p>CLAHE EVENTOS se compromete a proteger los datos personales que los usuarios proporcionen, de acuerdo con la Ley 25.326 de Protección de Datos Personales.</p>

    <h3>12. Legislación aplicable y jurisdicción</h3>
    <p>Los presentes Términos y Condiciones se rigen por las leyes de la República Argentina. Para cualquier controversia derivada del uso del sitio o los servicios ofrecidos, las partes se someten a la jurisdicción de los tribunales ordinarios con asiento en el Departamento Judicial de la Provincia de Buenos Aires.</p>
              {/* Resto de términos... */}
            </div>

            <div className="modal-footer">
              <button className="btn-aceptar" onClick={aceptarTerminos}>
                Aceptar
              </button>
              <button className="btn-cancelar" onClick={closeModal}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .modal {
          display: flex;
          position: fixed;
          z-index: 999;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          padding: 40px 10px;
          overflow-y: auto;
        }

        .modal-content {
          background-color: white;
          max-width: 700px;
          margin: auto;
          border-radius: 10px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          max-height: 90vh;
          box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
        }

        .modal-header {
          position: sticky;
          top: 0;
          background-color: #1976d2;
          color: white;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #125aa0;
        }

        .modal-body {
          padding: 20px 24px;
          overflow-y: auto;
          color: #000;
          background-color: #fff;
          line-height: 1.6;
          font-size: 12px;
          font-family: 'Segoe UI', sans-serif;
        }

        .modal-body h3 {
          font-size: 13px;
          margin-top: 20px;
          color: #000;
        }

        .modal-footer {
          text-align: right;
          padding: 16px 24px;
          border-top: 1px solid #eee;
          background-color: #f9f9f9;
        }

        .btn-aceptar {
          background-color: #1a73e8;
          color: white;
          border: none;
          padding: 10px 18px;
          font-size: 14px;
          border-radius: 6px;
          cursor: pointer;
          margin-right: 10px;
        }

        .btn-aceptar:hover {
          background-color: #1669c1;
        }

        .btn-cancelar {
          background-color: #ccc;
          color: #e30f0f;
          border: none;
          padding: 10px 18px;
          font-size: 14px;
          border-radius: 6px;
          cursor: pointer;
        }

        .btn-cancelar:hover {
          background-color: #bbb;
        }
      `}</style>
    </div>
  );
}
