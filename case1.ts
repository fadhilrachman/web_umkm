type IFruit = {
  fruitId: number;
  fruitName: string;
  fruitType: "IMPORT" | "LOCAL";
  stock: number;
};
const fruits: IFruit[] = [
  {
    fruitId: 1,
    fruitName: "Apel",
    fruitType: "IMPORT",
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: "Kurma",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: "apel",
    fruitType: "IMPORT",
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: "Manggis",
    fruitType: "LOCAL",
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: "Jeruk Bali",
    fruitType: "LOCAL",
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: "KURMA",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: "Salak",
    fruitType: "LOCAL",
    stock: 150,
  },
];

// 1. Buah apa saja yang dimiliki Andi? (fruitName)

const buahAndi = fruits.filter((buah, index, item) => {
  return (
    index ===
    item.findIndex(
      (val) => val.fruitName.toLowerCase() === buah.fruitName.toLowerCase()
    )
  );
});
const jawaban1 = buahAndi.map((val) => val.fruitName); // JAWABAN CASE 1

// 2.Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah
// (fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di
// masing-masing wadah?
let wadah: any = {
  impor: [],
  local: [],
};
fruits.map((val) =>
  val.fruitType == "IMPORT"
    ? wadah.impor.push(val.fruitName)
    : wadah.local.push(val.fruitName)
); // JAWABAN CASE 2

// masing-masing wadah?
// 3. Berapa total stock buah yang ada di masing-masing wadah?
let jawaban2: number = 0;
fruits.map((val: IFruit) => (jawaban2 += val.stock)); //JAWABAN CASE 3

// console.log({ jawaban1, jawaban2 });

// 4. Apakah ada komentar terkait kasus di atas?
