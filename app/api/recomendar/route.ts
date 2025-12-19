import { NextResponse } from "next/server";

const destinosPorTipo: any = {
  praia: [
    { destino: "Fernando de Noronha", epoca: "Agosto a Outubro" },
    { destino: "Maldivas", epoca: "Novembro a Abril" },
    { destino: "Cancún", epoca: "Março a Junho" },
    { destino: "Bora Bora", epoca: "Maio a Outubro" },
    { destino: "Jericoacoara", epoca: "Julho a Dezembro" },
  ],
  aventura: [
    { destino: "Patagônia", epoca: "Outubro a Março" },
    { destino: "Chapada Diamantina", epoca: "Maio a Setembro" },
    { destino: "Nova Zelândia", epoca: "Dezembro a Fevereiro" },
    { destino: "Peru", epoca: "Maio a Setembro" },
  ],
  cultural: [
    { destino: "Roma", epoca: "Abril a Junho" },
    { destino: "Paris", epoca: "Abril a Setembro" },
    { destino: "Kyoto", epoca: "Março a Maio" },
    { destino: "Lisboa", epoca: "Março a Outubro" },
  ],
  romântica: [
    { destino: "Santorini", epoca: "Maio a Setembro" },
    { destino: "Paris", epoca: "Abril a Junho" },
    { destino: "Veneza", epoca: "Abril a Outubro" },
    { destino: "Gramado", epoca: "Junho a Agosto" },
  ],
};

function embaralhar(array: any[]) {
  return array.sort(() => Math.random() - 0.5);
}

export async function POST(req: Request) {
  const dados = await req.json();

  let candidatos = destinosPorTipo[dados.tipo] || [];

  // Ajuste simples por orçamento
  if (dados.orcamento === "baixo") {
    candidatos = candidatos.filter((d: any) =>
      ["Jericoacoara", "Gramado", "Lisboa", "Peru"].includes(d.destino)
    );
  }

  if (dados.orcamento === "alto") {
    candidatos = candidatos.filter((d: any) =>
      ["Maldivas", "Bora Bora", "Santorini", "Nova Zelândia"].includes(d.destino)
    );
  }

  // Embaralha para nunca vir igual
  const escolhidos = embaralhar(candidatos).slice(0, 3);

  const resposta = escolhidos.map((d: any) => ({
    destino: d.destino,
    motivo: `Combina com uma viagem do tipo ${dados.tipo}, perfil ${dados.perfil} e duração de ${dados.duracao} dias.`,
    melhor_epoca: d.epoca,
  }));

  return NextResponse.json(resposta);
}
