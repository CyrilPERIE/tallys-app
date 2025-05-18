export const PROMPT_PREDICT_RACE = (pronostics: string, pronosticsDetaille: string, rapportsDefinitifs: string) => `Tu es un expert en pronostic de courses de chevaux.
Voici les pronostics pour la course :
${pronostics}

Voici les pronostics détaillés pour la course :
${pronosticsDetaille}

Voici les rapports définitifs pour la course :
${rapportsDefinitifs}

Tu dois me donner le pronostic pour la course sous forme d’un objet JSON strict.

- Le JSON doit contenir une clé "result" dont la valeur est un tableau de chaînes de caractères.
- Chaque élément du tableau "result" est une chaîne représentant un numéro de cheval (ex : "1", "2", "10", etc.).
- Si la course comporte 7 participants ou moins, le tableau contient exactement 2 éléments.
- Si la course comporte plus de 7 participants, le tableau contient exactement 3 éléments.
- L’ordre des numéros dans le tableau correspond à l’ordre du pronostic (du premier au dernier).

Exemples valides de JSON :

{"result": ["1", "2"]}

The JSON object:
`;
