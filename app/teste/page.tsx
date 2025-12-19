"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function RecomendarViagem() {
  const [form, setForm] = useState({
    tipo: "praia",
    orcamento: "medio",
    duracao: "7",
    perfil: "casal",
    clima: "quente",
  });

  const [loading, setLoading] = useState(false);
  const [resultados, setResultados] = useState<any[]>([]);

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit() {
  setLoading(true);

  const res = await fetch("/api/recomendar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  const data = await res.json();
  setResultados(data);

  setLoading(false);
}


  return (
    <div className="min-h-screen bg-neutral-50 p-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 !mt-[200px] gap-10">
        {/* Formulário */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-2xl shadow p-6"
        >
          <h1 className="text-2xl font-semibold mb-6">
            Descubra o destino ideal ✈️
          </h1>

          <div className="space-y-4">
            <Select label="Tipo de viagem" name="tipo" value={form.tipo} onChange={handleChange}
              options={["praia", "aventura", "cultural", "romântica"]} />

            <Select label="Orçamento" name="orcamento" value={form.orcamento} onChange={handleChange}
              options={["baixo", "medio", "alto"]} />

            <Select label="Duração (dias)" name="duracao" value={form.duracao} onChange={handleChange}
              options={["3", "7", "10", "15"]} />

            <Select label="Perfil" name="perfil" value={form.perfil} onChange={handleChange}
              options={["casal", "familia", "sozinho"]} />

            <Select label="Clima desejado" name="clima" value={form.clima} onChange={handleChange}
              options={["quente", "frio", "indiferente"]} />
          </div>

          <button
            onClick={handleSubmit}
            className="mt-6 w-full rounded-xl bg-black text-white py-3 hover:opacity-90"
          >
            {loading ? "Analisando opções..." : "Encontrar destinos"}
          </button>
        </motion.div>

        {/* Resultados */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          {resultados.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow p-5"
            >
              <h2 className="text-xl font-semibold">{item.destino}</h2>
              <p className="text-sm mt-2 text-neutral-600">{item.motivo}</p>
              <p className="text-sm mt-1 text-neutral-400">Melhor época: {item.epoca}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function Select({ label, name, value, onChange, options }: any) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 w-full rounded-lg border border-neutral-300 p-2"
      >
        {options.map((op: string) => (
          <option key={op} value={op}>{op}</option>
        ))}
      </select>
    </div>
  );
}
