// Calcule la distance de Levenshtein entre deux chaînes de caractères
// Pour les questiobns à deux réponses
export const levenshteinDistance = (answer, userAnswer) => {
  answer.forEach(choice => {
    const word1 = choice;
    const word2 = userAnswer;
    const m = word1.length;
    const n = word2.length;
    const dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(null));

    for (let i = 0; i <= m; i++) {
      dp[i][0] = i;
    }

    for (let j = 0; j <= n; j++) {
      dp[0][j] = j;
    }

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = word1[i - 1] === word2[j - 1] ? 0 : 1;
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1, // deletion
          dp[i][j - 1] + 1, // insertion
          dp[i - 1][j - 1] + cost, // substitution
        );
      }
    }

    const levenshteinDistance = dp[m][n];
    return levenshteinDistance;
  });
};

// Pour les questions à une seule réponse
export function calculateLevenshteinDistance(a, b) {
  if(a.length === 0) return b.length; 
  if(b.length === 0) return a.length;

  let matrix = [];

  for(let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for(let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for(let i = 1; i <= b.length; i++) {
    for(let j = 1; j <= a.length; j++) {
      if(b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, 
          matrix[i][j - 1] + 1, 
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
}