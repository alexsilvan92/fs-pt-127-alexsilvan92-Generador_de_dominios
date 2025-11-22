const pronoun = ["mi", "tu"];
const adj = ["peludo", "suave"];
const noun = ["suricato", "gatito"];
const domains = [".com", ".es"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < domains.length; l++) {
        console.log ("www." + pronoun[i] + adj[j] + noun[k] + domains[l]);
      }
    }
  }
}
