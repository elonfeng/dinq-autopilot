# dinq-autopilot

<div align="center">

✈️ **AI Autopilot for Your Dinq Profile**

Auto-generate Dinq cards with Code Agents - Claude Code, Cursor, Windsurf & more

[![npm version](https://img.shields.io/npm/v/dinq-autopilot.svg)](https://www.npmjs.com/package/dinq-autopilot)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![MCP](https://img.shields.io/badge/MCP-Compatible-blue)](https://modelcontextprotocol.io)

</div>

---

## What is dinq-autopilot?

**dinq-autopilot** is an AI agent that automatically manages your [Dinq](https://dinq.me) profile through natural language commands. Built on the Model Context Protocol (MCP), it works seamlessly with Claude Code, Cursor, Windsurf, and other AI coding assistants.

### The Old Way ❌
```
1. Open browser → dinq.me
2. Login
3. Click "Add Card"
4. Fill out form
5. Save
```

### The Autopilot Way ✅
```
You: "Create a token stats card for this week"
AI: ✅ Done! Token stats card created.
```

---

## Features

- 🤖 **Natural Language Control** - Command your Dinq profile through conversational AI
- 📊 **Token Statistics** - Track your Claude Code usage automatically
- 🔗 **Social Media Cards** - Batch import GitHub, LinkedIn, Twitter profiles
- 📝 **Custom Notes** - Create markdown-powered note cards
- 🎯 **Career Trajectory** - Generate professional timeline from your bio
- 🎨 **Smart Management** - List, update, and delete cards with simple commands

---

## Quick Start

### Installation

```bash
npm install -g dinq-autopilot
```

### Setup

```bash
dinq-autopilot setup
```

You'll be prompted to enter your Dinq API token (get it from [dinq.me/settings/api](https://dinq.me/settings/api))

### Usage in Claude Code

```bash
claude

> Create a token stats card for this week with 15000 input and 8000 output tokens
✅ Token statistics card created!

> Create a GitHub card for my profile: github.com/username
✅ GitHub card created!

> List all my cards
📋 Your cards:
1. [TOKEN_STATS] This week
2. [GITHUB] username
```

---

## Available Commands

### Card Creation

- **`create_token_stats_card`** - Generate token usage statistics
  ```
  Create a token stats card for this month with 50000 input and 30000 output tokens
  ```

- **`create_github_card`** - Show GitHub activity
  ```
  Create a GitHub card for https://github.com/torvalds
  ```

- **`create_note_card`** - Create markdown notes
  ```
  Create a note card titled "Project Ideas" with content "Build an AI code review tool"
  ```

- **`create_social_cards`** - Batch import social profiles
  ```
  Create cards for my GitHub (github.com/user), LinkedIn (linkedin.com/in/user), and Twitter (twitter.com/user)
  ```

- **`create_career_trajectory`** - Generate career timeline
  ```
  Create a career trajectory from my bio: "Software engineer with 5 years at Google..."
  ```

### Card Management

- **`list_cards`** - View all your cards
  ```
  List all my cards
  ```

- **`delete_card`** - Remove a card
  ```
  Delete card with ID abc123
  ```

---

## Supported Tools

dinq-autopilot works with any MCP-compatible AI tool:

- ✅ [Claude Code](https://claude.com/code)
- ✅ [Cursor](https://cursor.sh)
- ✅ [Windsurf](https://codeium.com/windsurf)
- ✅ VS Code with [Cline](https://github.com/cline/cline)
- ✅ Any MCP client

---

## Configuration

### Claude Code

Automatic configuration via `dinq-autopilot setup` command.

Manual configuration in `~/.claude.json`:

```json
{
  "mcpServers": {
    "dinq-autopilot": {
      "command": "npx",
      "args": ["-y", "dinq-autopilot"],
      "env": {
        "DINQ_USER_TOKEN": "your_token_here",
        "DINQ_API_ENDPOINT": "https://api.dinq.me"
      }
    }
  }
}
```

### Cursor

Configuration in `~/.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "dinq-autopilot": {
      "command": "npx",
      "args": ["-y", "dinq-autopilot"],
      "env": {
        "DINQ_USER_TOKEN": "your_token_here"
      }
    }
  }
}
```

### Windsurf

Similar to Cursor configuration.

---

## Example Use Cases

### 📊 Track Your AI Usage
```
"Create a token stats card for this month with 150000 input and 90000 output tokens"
```

### 🚀 Quick Profile Setup
```
"Create social cards for my GitHub github.com/user, LinkedIn linkedin.com/in/user, and Spotify open.spotify.com/user/xxx"
```

### 📝 Meeting Notes
```
"Create a note card titled 'Sprint Planning' with today's action items: 1. Review backlog 2. Plan sprint 3. Assign tasks"
```

### 🎯 Career Showcase
```
"Create a career trajectory from my bio: I'm a full-stack engineer with 5 years at Google..."
```

---

## Development

### Build from Source

```bash
git clone https://github.com/elonfeng/dinq-autopilot.git
cd dinq-autopilot
npm install
npm run build
```

### Local Testing

```bash
npm run dev
```

---

## License

MIT © Elon Feng

---

## Links

- [Dinq Platform](https://dinq.me)
- [Report Issues](https://github.com/elonfeng/dinq-autopilot/issues)
- [MCP Documentation](https://modelcontextprotocol.io)

---

<div align="center">

**Built for the AI-native developer workflow**

⭐ Star on GitHub • 📦 npm Package

</div>
