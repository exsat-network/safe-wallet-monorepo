import Safe from '@exsat/test-protocol-kit'

export async function createSafes(safeConfigurations) {
  const safes = []
  for (const config of safeConfigurations) {
    const providerUrl = config.provider._getConnection().url

    const safe = await Safe.init({
      provider: providerUrl,
      signer: config.signer,
      safeAddress: config.safeAddress,
    })
    safes.push(safe)
  }
  return safes
}
