//1. Récupérer les relevés d'une parcelle
export function relevesDeParcelle(releves, idParcelle) {
  return releves.filter(
    (releve) => releve.parcelle === idParcelle
  );
}