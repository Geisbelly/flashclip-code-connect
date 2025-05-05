
const sheetId = '2PACX-1vQ3nvgTvC4ULYQsB6renOL34P_83EgECG6DwQjVRAnmRF7UUoCHyTseyFz7GZ2RMz4L80ky3cgvrzz3'; // ID da publicação, não o da planilha original
const gid = '179122432';

// URL de planilha publicada em formato CSV (mais fácil de parsear)
const url = `https://docs.google.com/spreadsheets/d/e/${sheetId}/pub?gid=${gid}&single=true&output=csv`;



  export default async function fetchSheetCSV() {
    const res = await fetch(url);
    const text = await res.text();
  
    // Parse simples CSV → Array de arrays
    const rows = text.trim().split('\n').map(row => row.split(','));
    return rows;
  }
  
