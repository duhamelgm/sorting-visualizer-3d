export const map = (value, istart, istop, ostart, ostop) =>
  ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
