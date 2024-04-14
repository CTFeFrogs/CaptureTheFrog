import { useAccount, useConnect, useDisconnect } from 'wagmi'

function App() {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()

  return (
    <>
      <div>
        <h2>Account</h2>

<div className="flex flex-col items-center justify-center min-h-screen bg-white p-8">
  <h1 className="text-5xl font-bold mb-2">Capture the Flag</h1>
  <p className="text-2xl mb-8">Without playing for gas</p>
  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 bg-black text-white px-6 py-3 rounded-md mb-4">
    Capture the Flag
  </button>
  <p className="mb-4">Click the button to capture the flag with your account? using GSN 3/0/0(beta)</p>
  <button
    type="button"
    role="combobox"
    aria-controls="radix-:R1dafnnja:"
    aria-expanded="false"
    aria-autocomplete="none"
    dir="ltr"
    data-state="closed"
    data-placeholder=""
    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    id="account"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="h-4 w-4 opacity-50"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6"></path>
    </svg>
  </button>
  
  <div className="mt-8 text-left w-full max-w-4xl">
    <div className="mb-4">
      <h2 className="font-semibold">GSN Contracts status:</h2>
      <p>Current network: Mainnet</p>
      <p>RelayHub evginy0077 relayers: 3</p>
      <p>Paymaster evginy0077 balance: 0.0030</p>
      <p>Forwarder evginy0077</p>
    </div>
    <div>
      <h2 className="font-semibold">Your account: evginy0077</h2>
      <p>CTF Contract: evginy0077</p>
      <p>Current flag holden: evginy0077</p>
    </div>
  </div>
</div>

        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>

        {account.status === 'connected' && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      <div>
        <h2>Connect</h2>
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </button>
        ))}
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>
    </>
  )
}

export default App
