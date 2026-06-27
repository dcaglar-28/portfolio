/** ASCII star field — scatter around logos. */
export type BannerStar = {
  art: string;
  left: string;
  top: string;
  glyphScale: number;
  sizeScale?: number;
  isBraille?: boolean;
  isFiller?: boolean;
};

type StarTemplate = {
  art: string;
  isBraille?: boolean;
  isFiller?: boolean;
};

const brailleCometArt = `⠀⠀⠀⡄⠀⠀⠀⠀⠀⣼⠀⠀
⠀⠀⢀⣷⡀⠀⠀⠴⣶⣿⣶⠦
⠐⠶⣿⣿⡿⠖⠀⠀⠀⢻⠀⠀
⠀⠀⠈⣿⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠋⠀⠀⠀⠀⠀⠀⠀⠀`;

const brailleSparkArt = `⠀⠀⢰⡆⠀⠀⠀⠀⢠⠄⠀
⠀⠀⣺⠃⠀⠀⠀⣠⣾⣄⡀
⠀⢀⢯⠀⠀⠀⠀⠀⣿⠋⠀
⠴⡟⡿⣲⡄⠀⠀⠀⠁⠀⠀
⠀⣏⣿⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠸⣸⠀⠀⠀⠀⣴⡧⠀⠀
⠀⠀⡏⠀⠀⠀⠉⣿⠟⠀⠀
⠀⠀⠃⠀⠀⠀⠀⠉⠀⠀⠀`;

const brailleBoltArt = `⠀⠀⠀⠀⢸⠀⠀⠀
⠀⠀⠀⠀⢸⡄⠀⠀
⠀⣼⣠⣤⠃⢙⣦⣀
⢬⣿⡥⠌⢣⡞⠀⠀
⠀⠹⠀⠀⠀⡇⠀⠀`;

const brailleStarArt = `⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡅⡿⡃⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢠⣺⢹⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣼⠇⢸⣯⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣠⡟⠃⠀⠀⢿⢳⡄⠀⠀⡀⠀⠀⠀
⠶⠶⠛⠓⣯⣽⡄⠀⠀⠀⠀⢮⣩⣿⣤⡤⠷⠧⡀
⠀⠀⠀⠀⠀⠉⣯⢆⠀⠀⢄⢯⠟⠉⠙⠂⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⡖⢇⠀⣞⡏⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠩⡇⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣷⡻⡅⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡟⡟⠃⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣗⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠮⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀`;

const brailleBloomArt = `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢘⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣮⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⢿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⢀⣼⣿⠋⠋⢻⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣀⣠⣶⣿⡿⠁⠀⠀⠀⠻⣿⣶⣤⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠠⣴⣶⣾⣿⣿⣿⣛⠅⠀⠀⠀⠀⠀⠀⠀⢙⣻⣿⣿⣷⣶⣦⡤
⠀⠀⠀⠀⠀⠀⠀⠈⠉⣿⡟⠿⣿⣷⣦⠀⠀⠀⠀⣀⣶⣿⡿⠟⠋⠉⠉⠁⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣧⠀⠀⠙⣿⣷⡄⠀⣰⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⡄⠀⠀⠘⣿⣷⢰⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣠⣿⣿⣿⣧⠀⠀⠀⢹⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣠⣼⣿⣿⣿⣿⣿⣷⣤⡀⠘⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠤⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡧⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠉⠙⠻⢿⣿⣿⣿⣿⣿⣿⠿⠛⠉⢹⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⢻⣿⣿⣿⡿⠃⠀⠀⠀⢸⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⠃⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⠀⠀⠀⠀⠀⠈⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`;

const brailleFlareArt = `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡆⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣧⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣄⠀⠀⠀⠀
⠀⠀⠀⠀⢸⡀⠀⠀⠀⠀⠠⠤⠴⣶⣿⣿⣿⣿⣷⣶⠤⠤
⠀⠀⠀⣠⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠉⢿⣿⠟⠁⠀⠀⠀
⠒⠚⠛⢿⣿⣿⠿⠛⠓⠂⠀⢠⡄⠀⠀⠈⡟⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢻⠏⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⡃⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠸⠀⠀⠀⠀⠀⠀⣾⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⠀⠀⠀⠀⢀⣼⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣀⣀⣠⣤⣤⣶⣿⣿⣿⣿⣿⣿⣶⣤⣤⣄⣀⡀⠀
⠀⠀⠀⠀⠀⠀⠉⠙⠛⢿⣿⣿⣿⣿⡿⠛⠋⠉⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`;

const brailleNebulaArt = `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠐⠀⠀⠂⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⠀⠠⠀⣀⢄⡠⣔⢬⠃⠵⠯⠂⡠⢦⠀⠀⡀⠄⠄⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⢀⡔⣌⣔⣏⠋⠄⡪⡹⡝⠋⡛⣃⠃⠆⡅⡄⠂⠀⠐⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐
⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡴⡰⣷⠾⡃⡌⢍⠉⠈⠈⠀⠈⠀⠉⠂⠀⠀⠀⠀⠄⠀⠀⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠂⠀⠀⠀⠀⠀⡼⣷⣽⡋⠉⠁⠀⠀⠀⠀⠀⠐⠀⠀⠀⡀⠄⠀⠀⠐⠈⠀⢀⠄⢈⠀⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⢄⡔⣿⣯⠋⠂⠀⠈⠀⠀⢄⣠⡌⡤⡆⣄⠦⣧⡒⠠⠄⢐⡀⠀⠀⠀⠀⠀⡠⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢀⠀⠀⠀⠀⠈⠄⠑⣯⡟⡗⠳⠀⠀⠀⠀⣀⡨⣿⡯⡋⡍⡉⢙⠮⠹⢗⠟⡓⢣⢥⢂⣁⠄⡀⠃⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠈
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣣⣿⠿⡧⠊⠀⠀⠁⡀⣵⡿⠞⡁⠔⠅⠀⠀⠁⠀⠀⠉⠉⠨⠽⢕⠧⣜⠅⡺⡇⠄⠠⠄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢈⠀⠂⠀⠂⡸⣾⣷⠠⠀⡀⠀⣠⣚⡕⡁⠁⠀⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠋⠕⡥⠭⣦⢈⡄⠀⠁⠀⠀⠀⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠐⠀⢦⡧⡇⡀⠀⡂⠀⠂⣝⣃⠁⠠⠁⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠈⢣⡕⡷⡕⠀⠱⠑⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠐⠌⣻⡯⡃⡀⡀⠀⠀⠁⠾⡕⠅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡽⠭⣻⠢⠀⠀⠀⠀⠀⠀⠀⠈
⠀⠀⠀⠁⠀⠈⠠⠀⠠⣿⡣⡀⠀⠀⠀⠀⠐⢿⡅⡋⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠠⡿⠵⠀⠀⠀⠀⠄⢀⠀⠀⠀
⠀⠀⠀⡀⠀⠀⠐⠀⠤⣾⡏⡒⠄⠀⠀⠀⡈⠉⠟⠿⣷⣯⠦⠆⠤⠠⢀⣀⠄⠀⠀⢀⠀⠁⠀⠀⠀⠀⠆⣜⣷⠀⠃⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⡘⠀⢘⣷⠓⠀⡀⠀⠀⠁⠀⠀⠉⠈⢚⡋⡲⡧⠍⣨⣀⠄⠀⠀⠀⠀⠀⠀⠀⣀⢡⣹⣞⡗⠉⠂⠠⠀⠀⠀⠀⠁⠀
⠀⠀⠀⠀⠀⠀⠀⢠⠀⢼⣽⡷⡄⠈⠂⠁⠀⠀⠀⠀⠁⠄⠐⠊⡣⢆⠀⢒⠄⠀⠀⠀⠀⠀⠀⠈⡁⢅⣏⡟⢥⠀⠀⠀⠀⠀⠀⠀⠀⠂
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠏⡻⣿⣃⡔⠀⠂⡀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⡀⠀⠠⢰⠂⠥⠶⡿⡛⡁⠂⠀⠂⡀⠄⠀⠀⠈⠀⠀
⠀⠀⠉⠀⠀⠀⠀⠀⠁⠁⡩⣽⠧⢁⡌⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⢀⡀⠠⠆⢨⣷⢭⡙⠨⠠⡀⠁⠐⠀⠀⠈⠀⠁⠀⢄⢁
⠀⠀⠀⠀⠀⠀⠀⠀⠄⠁⠡⡛⢪⠝⣦⣥⡢⠀⠀⠀⡀⠀⠀⡀⠀⠀⡔⠔⠔⢀⣥⣡⢆⡜⣟⠌⡀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠀
⠀⠄⠀⠀⠀⠀⠀⠀⠀⠀⠉⠝⣅⡀⣴⣽⡽⡇⢧⡮⢂⣀⡶⣊⢪⢙⠘⣽⡕⣋⠥⡏⠅⡁⠀⠀⠁⠀⠀⠢⡀⠀⠀⠀⠀⠁⠀⠀⠀⠐
⠀⠀⠀⠀⠀⠀⠀⠀⠁⠠⠀⠀⠈⠌⠀⠑⢉⠻⠋⠳⢥⠧⡤⠅⠂⠏⢁⠼⡯⠋⠈⠀⠀⠀⠀⠀⠠⠀⠀⠀⠀⠀⠀⠀⠀⠔⠀⠂⠀⠀
⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠢⠁⣑⠎⠄⡠⡆⡰⡁⠸⠋⠉⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠨⠐⠈⠀⠀⠀⠀⠀⠄⠀⠄⠀
⠀⠀⠁⡀⠀⠀⠀⠠⠀⠀⠀⠀⠀⠂⠀⠀⠈⠁⠁⠈⠀⠁⠀⠄⠀⡄⠀⠀⠀⠀⠀⠑⠀⠀⠂⠀⠀⠄⠀⠀⠀⠄⠄⠂⠁⠀⠀⠀⠀⠀
⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠠⠂⠀⠀⠀⠄⠀⠀⠀⠀⠐⠐⠀⠀⠀⠀⠀⠀⠀`;

const brailleGalaxyArt = `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢄⣦⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠋⡟⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣿⡦⠄⠀⠀⠀⡀⢸⠀⠀⠀⠀⠀⠠⠔⣴⡦
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡆⠀⠀⣀⣀⣸⣿⣿⣁⣀⣀⠀⠀⠈⠈⠁
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠹⢻⠿⠅⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⡀⣆⠀⠀⠀⠀⠀⠀⢠⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢦⣀⠀⠀⣿⣿⡀⠀⣀⡴⠀⠀⠈⠝⡿⠀⠀⠀⢀⣀⣰⣼⣶⣂⣀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣶⣿⣿⣶⣿⡿⠁⠀⠀⠀⠀⠁⠀⠀⠀⠀⠈⠹⢻⠿⠍⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣠⣤⣤⣤⣴⣶⣿⣿⣿⣿⣿⣿⣶⣶⣤⣤⣤⣤⣄⣀⠀⠀⠀⠀⠀⢘⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⢙⣿⣿⣿⣿⣿⣿⡋⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⢀⠀⠀⠀⢠⣿⠿⠛⣿⣿⠟⠿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠀⠾⠳⠀⠀⠀⠈⠀⠀⠀⢻⡿⠀⠀⠀⠙⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⡄⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣄⣾⣀⠀⠀⠀⠀⠒⠺⡿⡒⠂⠘⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠐⠒⠒⣺⣿⣗⡚⠒⠂⠀⠀⠀⠃⠀⠀⠀⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠿⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`;

const brailleStellarArt = `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⠴⠃⠀⠀⠀⠀⠀⣼⡧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢺⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣏⡇⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢴⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢤⣀⣠⣤⣴⣾⣿⡾⡿⣧⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⢄⣀⣸⣀⡀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣟⡝⣿⣫⣷⣿⠯⠁⠉⠀⠀⠀⠀⠀⡄⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⣇⣯⡿⡊⠀⠀⠀⠀⠀⠀⠀⠀⣼⡇⠀⠀⠀⠀⠀⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠡⣿⣞⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠧⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢨⣿⡿⡅⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⡧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⢀⣟⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣯⠇⠀⠀⠀⠴⢶⣦⣀⣶⡟⣿⢯⡻⣦⣤⡤⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢐⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠈⢻⣷⣏⡵⣏⣽⠗⠀⠀⠀⠀⠀⠀⡠⠤⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⣸⡀⡀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣮⡏⠀⠀⠀⠀⠀⠀⠀⠀⠙⠚⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠨⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡖⣢⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢘⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢘⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡍⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`;

const brailleClusterArt = `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡁⠀⠀⠀⠀⠀⠀⠀⠠⠀⠀⠀
⠀⠀⠀⠁⠀⡀⠀⠀⠀⠀⣿⠇⠀⠀⢀⠜⠁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠁⢀⢀⣜⡜⣳⢢⠜⠀⠀⠀⠀⠀⠀⢀⠀⠀
⠀⠀⠀⠀⠀⣀⣀⡶⠵⣿⡻⡏⢷⣴⣄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠈⠝⠑⠙⠒⢖⣿⣒⡜⣈⣏⡮⠍⠖⠖⠑⠀⠀⠀⠀
⠀⢀⣄⡀⠀⠀⠀⡀⠂⠹⡵⣙⡟⢁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠉⠀⠀⠠⠂⠀⠀⠀⢸⡞⠀⠀⠁⢄⠀⠀⣬⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⣠⡷⣄⣀⣀⡀
⠀⠀⣂⣇⠀⠀⠀⠀⠀⠀⠈⡂⠀⠀⠀⠙⠉⠙⣯⠋⠀⠀⠀
⠀⠉⡻⡏⠉⠀⠀⠀⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⠀⠀⠀⠀
⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`;

const starTemplates: StarTemplate[] = [
  { art: brailleCometArt, isBraille: true },
  { art: brailleSparkArt, isBraille: true },
  { art: brailleBoltArt, isBraille: true },
  { art: brailleStarArt, isBraille: true },
  { art: brailleBloomArt, isBraille: true },
  { art: brailleFlareArt, isBraille: true },
  { art: brailleClusterArt, isBraille: true },
  { art: brailleNebulaArt, isBraille: true },
  { art: brailleGalaxyArt, isBraille: true },
  { art: brailleStellarArt, isBraille: true },
];

const fillerCrossArt = `   |
- * -
   |`;

const fillerColonArt = `: * .`;

const fillerScatterClusterArt = `⠀⠀⢸⣦⡀⠀⠀⠀⠀⢀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢸⣏⠻⣶⣤⡶⢾⡿⠁⠀⢠⣄⡀⢀⣴⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀
⠀⠀⣀⣼⠷⠀⠀⠁⢀⣿⠃⠀⠀⢀⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠴⣾⣯⣅⣀⠀⠀⠀⠈⢻⣦⡀⠒⠻⠿⣿⡿⠿⠒⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠉⢻⡇⣤⣾⣿⣷⣟⣾⢠⠀⠀⣿⠁⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠸⣿⡿⠏⠀⠀⠀⠀⠈⠀⠄⠀⠠⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`;

const fillerTemplates: StarTemplate[] = [
  { art: fillerCrossArt, isFiller: true },
  { art: fillerColonArt, isFiller: true },
  { art: fillerScatterClusterArt, isBraille: true },
];

const brailleTemplates = starTemplates.filter((t) => t.isBraille);

/** One repeating tile — all 12 designs once, sized for density when tiled. */
export const STAR_PATTERN_TILE = {
  width: 48,
  height: 62,
};

type PatternSlot = {
  /** Position within tile, 0–100. */
  x: number;
  y: number;
  template: StarTemplate;
  sizeScale: number;
};

const patternSlots: PatternSlot[] = [
  // Row 1 — comet, bolt, colon filler
  { x: 24, y: 14, template: starTemplates[0], sizeScale: 1.18 },
  { x: 50, y: 20, template: starTemplates[2], sizeScale: 1.15 },
  { x: 70, y: 18, template: fillerTemplates[1], sizeScale: 1.28 },
  // Row 2 — star, flare, spark
  { x: 26, y: 40, template: starTemplates[3], sizeScale: 1.08 },
  { x: 52, y: 46, template: starTemplates[5], sizeScale: 1.18 },
  { x: 68, y: 41, template: fillerTemplates[2], sizeScale: 0.55 },
  { x: 72, y: 42, template: starTemplates[1], sizeScale: 1.05 },
  // Row 3 — bloom + stellar (pulled together)
  { x: 34, y: 64, template: starTemplates[4], sizeScale: 1.05 },
  { x: 58, y: 66, template: starTemplates[9], sizeScale: 1.12 },
  // Scatter accent stars
  { x: 28, y: 17, template: fillerTemplates[2], sizeScale: 0.58 },
  { x: 30, y: 15, template: fillerTemplates[2], sizeScale: 0.56 },
  { x: 62, y: 14, template: fillerTemplates[2], sizeScale: 0.54 },
  { x: 68, y: 11, template: fillerTemplates[2], sizeScale: 0.56 },
  { x: 8, y: 28, template: fillerTemplates[2], sizeScale: 0.54 },
  { x: 92, y: 32, template: fillerTemplates[2], sizeScale: 0.56 },
  { x: 22, y: 24, template: fillerTemplates[2], sizeScale: 0.52 },
  { x: 78, y: 26, template: fillerTemplates[2], sizeScale: 0.54 },
  { x: 28, y: 42, template: fillerTemplates[2], sizeScale: 0.56 },
  { x: 32, y: 52, template: fillerTemplates[2], sizeScale: 0.58 },
  { x: 58, y: 28, template: fillerTemplates[2], sizeScale: 0.54 },
  { x: 6, y: 52, template: fillerTemplates[2], sizeScale: 0.54 },
  { x: 90, y: 56, template: fillerTemplates[2], sizeScale: 0.56 },
  { x: 24, y: 58, template: fillerTemplates[2], sizeScale: 0.52 },
  { x: 72, y: 54, template: fillerTemplates[2], sizeScale: 0.54 },
  { x: 38, y: 70, template: fillerTemplates[2], sizeScale: 0.56 },
  { x: 42, y: 78, template: fillerTemplates[2], sizeScale: 0.58 },
  { x: 52, y: 68, template: fillerTemplates[2], sizeScale: 0.54 },
  { x: 58, y: 82, template: fillerTemplates[2], sizeScale: 0.56 },
  { x: 12, y: 84, template: fillerTemplates[2], sizeScale: 0.54 },
  { x: 88, y: 80, template: fillerTemplates[2], sizeScale: 0.56 },
  { x: 48, y: 58, template: fillerTemplates[2], sizeScale: 0.52 },
  { x: 34, y: 32, template: fillerTemplates[2], sizeScale: 0.54 },
  { x: 96, y: 18, template: fillerTemplates[2], sizeScale: 0.5 },
  { x: 4, y: 68, template: fillerTemplates[2], sizeScale: 0.54 },
];

/** Build one pattern tile; positions are % of full banner. Pass origin (0,0) for tile-only preview. */
export function buildSinglePatternTile(originX: number, originY: number): BannerStar[] {
  return patternSlots.map((slot) => {
    const x = originX + (slot.x / 100) * STAR_PATTERN_TILE.width;
    const y = originY + (slot.y / 100) * STAR_PATTERN_TILE.height;
    const { template, sizeScale } = slot;
    return {
      left: fmt(x),
      top: fmt(y),
      art: template.art,
      glyphScale: glyphScaleForArt(template.art, template.isBraille, template.isFiller),
      sizeScale,
      isBraille: template.isBraille,
      isFiller: template.isFiller,
    };
  });
}

/** Same tile with star positions normalized to 0–100% within the tile bounds. */
export function buildPatternTileForPreview(): BannerStar[] {
  const tile = buildSinglePatternTile(0, 0);
  const w = STAR_PATTERN_TILE.width;
  const h = STAR_PATTERN_TILE.height;
  return tile.map((star) => ({
    ...star,
    left: fmt((parseFloat(star.left) / w) * 100),
    top: fmt((parseFloat(star.top) / h) * 100),
  }));
}

function seededRandom(seed: number) {
  let state = seed;
  return () => {
    state = (state * 16807) % 2147483647;
    return (state - 1) / 2147483646;
  };
}

const fmt = (value: number) => `${value.toFixed(1)}%`;

/** Matches StaticAsciiArt + home-banner-star CSS transform (lg breakpoint). */
const ASCII_FONT_SIZE = 6;
const STAR_CSS_SCALE = 1.5;
const FILLER_CSS_SCALE = 1.32;
const REF_BANNER_WIDTH_PX = 920;

const VISUAL_TARGET_CHARS = 7.2;
const BASE_GLYPH_SCALE = 0.84;

const LOGO_H_CLEARANCE = 1.15;
const LOGO_V_CLEARANCE = 1.4;
const DEFAULT_STAR_GAP = 0.48;
const PLACEMENT_FOOTPRINT_SCALE = 1.05;

const FILLER_GAP = 0.32;

const TARGET_BRAILLE = 68;
const TARGET_FILLERS = 95;

export type LogoZone = {
  left: number;
  right: number;
  top: number;
  bottom: number;
  /** Optional per-logo clearance override (defaults to global constants). */
  hClearance?: number;
  hClearanceLeft?: number;
  hClearanceRight?: number;
  vClearance?: number;
};

type Bounds = { left: number; right: number; top: number; bottom: number };

function artMaxDimension(art: string) {
  const lines = art.split("\n");
  const w = Math.max(...lines.map((line) => [...line].length));
  const h = lines.length;
  return Math.max(w, h, 1);
}

function glyphScaleForArt(art: string, isBraille = false, isFiller = false) {
  const maxDim = artMaxDimension(art);
  if (isFiller) {
    return BASE_GLYPH_SCALE * 0.72 * (4.2 / maxDim);
  }
  if (isBraille) {
    return BASE_GLYPH_SCALE * (VISUAL_TARGET_CHARS / maxDim);
  }
  return Math.min(0.88, BASE_GLYPH_SCALE * (4 / maxDim));
}

/** Rendered bounding box as % of banner width (conservative vs lg CSS scale). */
function renderedFootprintPercent(art: string, isBraille = false, isFiller = false) {
  const lines = art.split("\n");
  const charW = Math.max(...lines.map((line) => [...line].length), 1);
  const charH = lines.length;
  const glyphScale = glyphScaleForArt(art, isBraille, isFiller);
  const cssScale = isFiller ? FILLER_CSS_SCALE : STAR_CSS_SCALE;
  const fontSize = ASCII_FONT_SIZE * glyphScale * cssScale;
  const maxPx = Math.max(charW * fontSize, charH * fontSize);
  return (maxPx / REF_BANNER_WIDTH_PX) * 100;
}

type PlacedEntry = {
  bounds: Bounds;
  isFiller: boolean;
};

function placementBounds(
  x: number,
  y: number,
  template: StarTemplate,
  sizeScale: number,
): Bounds {
  const footprint =
    renderedFootprintPercent(template.art, template.isBraille, template.isFiller) *
    sizeScale *
    PLACEMENT_FOOTPRINT_SCALE;
  return uniformBounds(x, y, footprint);
}

function boundsForStar(star: BannerStar): Bounds {
  const footprint =
    renderedFootprintPercent(star.art, star.isBraille, star.isFiller) *
    (star.sizeScale ?? 1);
  const x = parseFloat(star.left);
  const y = parseFloat(star.top);
  return uniformBounds(x, y, footprint);
}

function pairGap(aIsFiller: boolean, bIsFiller: boolean) {
  return aIsFiller && bIsFiller ? FILLER_GAP : DEFAULT_STAR_GAP;
}

function rectsOverlap(a: Bounds, b: Bounds, gap: number) {
  return (
    a.left - gap < b.right &&
    a.right + gap > b.left &&
    a.top - gap < b.bottom &&
    a.bottom + gap > b.top
  );
}

function uniformBounds(x: number, y: number, footprint: number): Bounds {
  const half = footprint / 2;
  return { left: x - half, right: x + half, top: y - half, bottom: y + half };
}

function rectOverlapsLogo(
  left: number,
  right: number,
  top: number,
  bottom: number,
  logoZones: LogoZone[],
) {
  return logoZones.some((zone) => {
    const hPadLeft = zone.hClearanceLeft ?? zone.hClearance ?? LOGO_H_CLEARANCE;
    const hPadRight = zone.hClearanceRight ?? zone.hClearance ?? LOGO_H_CLEARANCE;
    const vPad = zone.vClearance ?? LOGO_V_CLEARANCE;
    if (right <= zone.left - hPadLeft) return false;
    if (left >= zone.right + hPadRight) return false;
    if (bottom <= zone.top - vPad) return false;
    if (top >= zone.bottom + vPad) return false;
    return true;
  });
}

function overlapsPlaced(bounds: Bounds, isFiller: boolean, placed: PlacedEntry[]) {
  return placed.some((other) =>
    rectsOverlap(bounds, other.bounds, pairGap(isFiller, other.isFiller)),
  );
}

function inBanner(bounds: Bounds) {
  return (
    bounds.left >= 0.5 &&
    bounds.right <= 99.5 &&
    bounds.top >= 1 &&
    bounds.bottom <= 99
  );
}

function shuffle<T>(items: T[], rand: () => number) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rand() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function tryPlaceStar(
  x: number,
  y: number,
  template: StarTemplate,
  sizeScale: number,
  placed: PlacedEntry[],
  stars: BannerStar[],
  logoZones: LogoZone[],
  ignoreLogos = false,
) {
  const rx = Math.round(x * 10) / 10;
  const ry = Math.round(y * 10) / 10;
  const bounds = placementBounds(rx, ry, template, sizeScale);

  if (!inBanner(bounds)) return false;
  if (
    !ignoreLogos &&
    rectOverlapsLogo(bounds.left, bounds.right, bounds.top, bounds.bottom, logoZones)
  ) {
    return false;
  }
  if (overlapsPlaced(bounds, false, placed)) return false;

  placed.push({ bounds, isFiller: false });
  stars.push({
    left: fmt(rx),
    top: fmt(ry),
    art: template.art,
    glyphScale: glyphScaleForArt(template.art, template.isBraille, template.isFiller),
    sizeScale,
    isBraille: template.isBraille,
    isFiller: template.isFiller,
  });
  return true;
}

function tryPlaceFiller(
  x: number,
  y: number,
  template: StarTemplate,
  sizeScale: number,
  placed: PlacedEntry[],
  stars: BannerStar[],
  logoZones: LogoZone[],
  ignoreLogos = false,
) {
  const rx = Math.round(x * 10) / 10;
  const ry = Math.round(y * 10) / 10;
  const bounds = placementBounds(rx, ry, template, sizeScale);

  if (!inBanner(bounds)) return false;
  if (
    !ignoreLogos &&
    rectOverlapsLogo(bounds.left, bounds.right, bounds.top, bounds.bottom, logoZones)
  ) {
    return false;
  }
  if (overlapsPlaced(bounds, true, placed)) return false;

  placed.push({ bounds, isFiller: true });
  stars.push({
    left: fmt(rx),
    top: fmt(ry),
    art: template.art,
    glyphScale: glyphScaleForArt(template.art, false, true),
    sizeScale,
    isFiller: true,
  });
  return true;
}

/** Drop stars under logos and resolve any remaining collisions. */
function finalizeStarField(stars: BannerStar[], logoZones: LogoZone[]) {
  const kept: BannerStar[] = [];
  const placed: PlacedEntry[] = [];

  for (const star of stars) {
    const bounds = boundsForStar(star);
    const isFiller = !!star.isFiller;

    if (!inBanner(bounds)) continue;
    if (rectOverlapsLogo(bounds.left, bounds.right, bounds.top, bounds.bottom, logoZones)) {
      continue;
    }
    if (overlapsPlaced(bounds, isFiller, placed)) continue;

    placed.push({ bounds, isFiller });
    kept.push(star);
  }

  return kept;
}

type Region = { xMin: number; xMax: number; yMin: number; yMax: number };

const BANNER_FIELD: Region = { xMin: 0.5, xMax: 99.5, yMin: 3, yMax: 97 };

/** Random x — uniform across the banner width. */
function scatterX(rand: () => number) {
  return BANNER_FIELD.xMin + rand() * (BANNER_FIELD.xMax - BANNER_FIELD.xMin);
}

/** Random y — biased toward the vertical center band, like confetti across a wavy row. */
function scatterY(rand: () => number) {
  if (rand() < 0.25) {
    return BANNER_FIELD.yMin + rand() * (BANNER_FIELD.yMax - BANNER_FIELD.yMin);
  }
  const u = (rand() + rand() + rand()) / 3;
  const bandTop = BANNER_FIELD.yMin + (BANNER_FIELD.yMax - BANNER_FIELD.yMin) * 0.18;
  const bandHeight = (BANNER_FIELD.yMax - BANNER_FIELD.yMin) * 0.64;
  return bandTop + u * bandHeight;
}

function pickBrailleSize(rand: () => number) {
  const r = rand();
  if (r < 0.1) return 1.12;
  if (r < 0.32) return 0.92;
  if (r < 0.62) return 0.72;
  return 0.52;
}

function pickFillerSize(rand: () => number) {
  return 0.72 + rand() * 0.48;
}

function countBraille(stars: BannerStar[]) {
  return stars.filter((star) => star.isBraille && !star.isFiller).length;
}

function countFillers(stars: BannerStar[]) {
  return stars.filter((star) => star.isFiller).length;
}

function buildPlacementQueue(rand: () => number, minLength: number): StarTemplate[] {
  const queue: StarTemplate[] = [];
  const brailleOrder = shuffle(brailleTemplates, rand);

  while (queue.length < minLength) {
    for (const template of brailleOrder) {
      queue.push(template);
    }
  }

  return queue;
}

/** Scatter stars organically, then carve out logo zones. */
function fillFullBanner(rand: () => number, logoZones: LogoZone[]): BannerStar[] {
  const stars: BannerStar[] = [];
  const placed: PlacedEntry[] = [];
  const brailleQueue = buildPlacementQueue(rand, TARGET_BRAILLE + 40);
  let brailleIndex = 0;

  for (let attempt = 0; attempt < 28000 && countBraille(stars) < TARGET_BRAILLE; attempt += 1) {
    const template = brailleQueue[brailleIndex % brailleQueue.length];
    brailleIndex += 1;
    tryPlaceStar(
      scatterX(rand),
      scatterY(rand),
      template,
      pickBrailleSize(rand),
      placed,
      stars,
      logoZones,
      true,
    );
  }

  // Accent pass — small braille pieces tuck into remaining gaps.
  for (let attempt = 0; attempt < 16000 && countBraille(stars) < TARGET_BRAILLE; attempt += 1) {
    const template = brailleTemplates[Math.floor(rand() * brailleTemplates.length)];
    tryPlaceStar(
      scatterX(rand),
      scatterY(rand),
      template,
      0.48 + rand() * 0.28,
      placed,
      stars,
      logoZones,
      true,
    );
  }

  const fillerOrder = shuffle(fillerTemplates, rand);
  let fillerIndex = 0;

  for (let attempt = 0; attempt < 18000 && countFillers(stars) < TARGET_FILLERS; attempt += 1) {
    const template = fillerOrder[fillerIndex % fillerOrder.length];
    fillerIndex += 1;
    tryPlaceFiller(
      scatterX(rand),
      scatterY(rand),
      template,
      pickFillerSize(rand),
      placed,
      stars,
      logoZones,
      true,
    );
  }

  return finalizeStarField(stars, logoZones);
}

/** Fallback zones for SSR / first paint before layout measurement. */
export const FALLBACK_LOGO_ZONES: LogoZone[] = [
  { left: 14, right: 31, top: 34, bottom: 69, hClearance: 0, vClearance: 0 },
  { left: 52, right: 73, top: 29, bottom: 74, hClearance: 0, vClearance: 0 },
  { left: 74, right: 88, top: 17, bottom: 85, hClearance: 0, vClearance: 0 },
];

export function buildBannerStars(logoZones: LogoZone[]): BannerStar[] {
  const rand = seededRandom(20260805);
  return fillFullBanner(rand, logoZones);
}
