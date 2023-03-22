---
order: -300
icon: terminal
---

# Flow

### Register an autonomous smart contract

1. User creates a smart contract and deploys it to the blockchain.
2. User registers the smart contract with the node using `register_async_message` extrinsic.

![](/static/register.png)

### Autonomous smart contract execution

1. The node periodically checks the registered smart contracts and executes them. The execution of this check is done with `on_initialize` hook.
2. The node checks if the smart contract is ready to be executed. If it is, the node executes the smart contract and updates the state of the smart contract.
3. The node checks if the autonomous smart contract should be removed from the pool. If it should, the node removes the smart contract from the pool.

![](/static/autonomous-smart-contract-execution-sequence-diagram.png)