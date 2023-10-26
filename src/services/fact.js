const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
    //fetch(CAT_ENDPOINT_RANDOM_FACT)
    //.then(res => res.json())
    //.then(data => {
    //  const { fact } = data
    //  return fact
    //})
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await res.json()
  const { fact } = data
  return fact
}
