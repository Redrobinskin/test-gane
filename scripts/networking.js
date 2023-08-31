```javascript
// Import shared dependencies
import { gameState, terminalState, player, networkChange } from './main.js';

// Define the network state
let networkState = {
  isConnected: false,
  currentServer: null,
  servers: [
    { name: 'localhost', isSecure: true },
    { name: 'remote1', isSecure: false },
    { name: 'remote2', isSecure: false },
  ],
};

// Function to connect to a server
function connectToServer(serverName) {
  let server = networkState.servers.find(s => s.name === serverName);
  if (server) {
    networkState.isConnected = true;
    networkState.currentServer = server;
    terminalState.output.push(`Connected to ${serverName}`);
    networkChange();
  } else {
    terminalState.output.push(`Server ${serverName} not found`);
  }
}

// Function to disconnect from a server
function disconnectFromServer() {
  if (networkState.isConnected) {
    networkState.isConnected = false;
    terminalState.output.push(`Disconnected from ${networkState.currentServer.name}`);
    networkState.currentServer = null;
    networkChange();
  } else {
    terminalState.output.push('Not connected to any server');
  }
}

// Function to hack a server
function hackServer(serverName) {
  let server = networkState.servers.find(s => s.name === serverName);
  if (server && !server.isSecure && player.skills.includes('hacking')) {
    terminalState.output.push(`Hacked into ${serverName}`);
    server.isSecure = true;
    gameState.score += 100;
    networkChange();
  } else {
    terminalState.output.push(`Failed to hack ${serverName}`);
  }
}

export { connectToServer, disconnectFromServer, hackServer, networkState };
```