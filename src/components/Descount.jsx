import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { motion, AnimatePresence } from "framer-motion";

const Descount = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && acceptedPolicy) {
      setShowPopup(false);
      // Aqui você pode enviar os dados para o backend
    }
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/20 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-white shadow-xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden relative rounded-lg"
          >
            {/* Botão de fechar */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
            >
              &times;
            </button>

            {/* Imagem */}
            <div className="w-full md:w-1/2 h-48 md:h-auto">
              <img
                src={assets.logo_768}
                alt="Promoção"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Formulário */}
            <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
              <div className="mb-6 text-center md:text-left">
                <img
                  src={assets.logo}
                  alt="Logo"
                  className="h-8 mb-10 mx-auto md:mx-0"
                />
                <h2 className="text-xl font-bold text-black-900 mb-2">
                  20% de Desconto na 1ª compra!
                </h2>
                <p className="text-gray-600 text-sm">
                  Fique por dentro das últimas tendências e aproveite ofertas
                  especiais enviadas diretamente para você.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 px-4 py-2"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 px-4 py-2"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-black text-white py-2 hover:bg-gray-900 transition"
                  disabled={!acceptedPolicy}
                >
                  Assinar
                </button>
                <label className="flex items-start text-xs text-gray-600">
                  <input
                    type="checkbox"
                    className="mr-2 mt-1"
                    required
                    checked={acceptedPolicy}
                    onChange={() => setAcceptedPolicy(!acceptedPolicy)}
                  />
                  Ao assinar, você concorda com a nossa{" "}
                  <a href="#" className="text-blue-600 underline ml-1">
                    Política de Privacidade
                  </a>
                  .
                </label>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Descount;
