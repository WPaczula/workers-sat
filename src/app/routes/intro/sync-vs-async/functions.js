const hugeNumber = 25000

const array = new Array(hugeNumber).fill().map((i, iter) => iter)

export const fireSync = () => {
  for (let i = 0; i < array.length; i += 1) {
    console.log(array[i])
  }
}

export const fireAsync = async () => {
  const asyncLog = arg => setTimeout(() => console.log(arg), 0)

  for (let i = 0; i < array.length; i += 1) {
    await asyncLog(array[i])
  }
}
