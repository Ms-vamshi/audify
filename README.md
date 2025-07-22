# Audify 🎙️

> **Revolutionary AI-Powered Podcast Creation Platform**

Transform your ideas into professional-quality podcasts in minutes, not hours. Audify democratizes podcast creation by leveraging cutting-edge AI to eliminate traditional barriers like expensive equipment, technical expertise, and design skills.

🔗 **Live Demo**: [audify.vercel.app](https://audify-git-main-sai-vamshi-mailas-projects.vercel.app)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Ms-vamshi/audify)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://typescript.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black.svg)](https://nextjs.org/)
[![Convex](https://img.shields.io/badge/Backend-Convex-orange.svg)](https://convex.dev/)

## ✨ Key Features

🤖 **AI-Powered Content Creation**
- Transform text into natural-sounding audio with 6 AI voices (Aloy, Shimmer, Nova, Echo, Fable, Onyx)
- Generate custom podcast artwork using DALL-E 3
- Multi-language support (9+ languages including Hindi, Japanese, Korean, Portuguese)

🎵 **Professional Audio Experience**
- Persistent audio player across all pages
- Skip controls (5-second intervals)
- Progress tracking with formatted time display
- Seamless listening while browsing

🔍 **Smart Discovery**
- Real-time search with debounced optimization
- Browse trending and featured content
- User profiles with content showcase
- Random podcast discovery

📱 **Mobile-First Design**
- Fully responsive across all devices
- Elegant mobile navigation
- Native app-like experience

## 🖼️ Screenshots

### 🏠 Home with Audio Player
<img width="700" height="880" alt="image" src="https://github.com/user-attachments/assets/b7501441-d1aa-482f-87f5-f5e15d12884d" />


### 🔍 Discover Podcasts
<img width="700" height="880" alt="image" src="https://github.com/user-attachments/assets/27d5533d-441b-4a35-b2b8-0e049d61286d" />


### 🎙️ Create a Podcast
<img width="700" height="880" alt="image" src="https://github.com/user-attachments/assets/657f253a-c6e1-4736-aafc-2997fe2db7ba" />

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0+
- OpenAI API key
- Clerk account
- Convex account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ms-vamshi/audify.git
   cd audify
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your API keys to `.env.local`:
   ```env
   # Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
   CLERK_SECRET_KEY=your_clerk_secret
   
   # Backend
   NEXT_PUBLIC_CONVEX_URL=your_convex_url
   CONVEX_DEPLOY_KEY=your_convex_deploy_key
   
   # AI Services
   OPENAI_API_KEY=your_openai_key
   
   # File Upload
   UPLOADTHING_SECRET=your_uploadthing_secret
   UPLOADTHING_APP_ID=your_uploadthing_app_id
   ```

4. **Initialize Convex**
   ```bash
   npx convex dev
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Tech Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| **Framework** | Next.js 14 | React framework with SSR |
| **Language** | TypeScript | Type-safe development |
| **Styling** | Tailwind CSS + Shadcn/UI | Modern component library |
| **Authentication** | Clerk | User management & auth |
| **Backend** | Convex | Backend as a Service |
| **AI Services** | OpenAI APIs | Text-to-speech & image generation |
| **Forms** | React Hook Form + Zod | Form handling & validation |
| **Storage** | UploadThing + Convex | File management |
| **Deployment** | Vercel | Hosting platform |

## 🎯 How It Works

1. **Write Your Script** - Simply paste or type your podcast content
2. **Choose AI Voice** - Select from 6 natural-sounding AI voices
3. **Generate Artwork** - Describe your vision, AI creates custom thumbnails
4. **Publish & Share** - Your podcast is ready to discover and share

## 📁 Project Structure

```
audify/
├── app/
│   ├── (auth)/          # Authentication pages
│   ├── (main)/          # Main app pages
│   ├── create-podcast/  # AI generation interface
│   ├── discover/        # Podcast discovery
│   └── profile/         # User profiles
├── components/
│   ├── ui/             # Shadcn/UI components
│   └── shared/         # Custom components
├── convex/             # Backend functions & schema
├── lib/                # Utilities & configurations
└── public/             # Static assets
```

## 🔧 Key Features Deep Dive

### AI Integration
- **Secure API Handling**: OpenAI calls encapsulated in Convex Actions
- **Voice Preview**: Test voices before generation
- **Custom Artwork**: DALL-E 3 integration with retry options
- **Multi-language**: Global accessibility built-in

### User Experience
- **Real-time Search**: Debounced search under 100ms response
- **Persistent Player**: Uninterrupted listening across pages
- **Mobile Optimized**: Native feel on any device
- **Type Safety**: End-to-end TypeScript for reliability

### Performance
- **Server-Side Rendering**: Fast initial page loads
- **Code Splitting**: Optimized bundle sizes
- **CDN Delivery**: Global content distribution
- **Real-time Updates**: Live data synchronization

## 🚨 Current Status

**Important Notice**: The demo currently uses static content as OpenAI API credits have been exhausted. All UI components and features are fully functional and will work immediately upon API access restoration.

### What's Working:
- ✅ Full user interface and navigation
- ✅ Audio player with sample content
- ✅ User authentication and profiles
- ✅ Search and discovery features
- ✅ Responsive design across devices

### Requires API Access:
- 🔄 AI voice generation
- 🔄 Custom artwork creation
- 🔄 New podcast creation

## 🔮 Roadmap

### Phase 1: Enhanced AI
- [ ] Emotion and pace control for voices
- [ ] Multi-speaker conversations
- [ ] AI content enhancement suggestions
- [ ] Automated chapter generation

### Phase 2: Platform Growth
- [ ] Analytics dashboard
- [ ] Monetization features
- [ ] Social interactions (comments, ratings)
- [ ] API for third-party integration

### Phase 3: Mobile & Scale
- [ ] Native mobile apps
- [ ] Offline listening support
- [ ] Advanced search with Elasticsearch
- [ ] Redis caching layer

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenAI** - Revolutionary AI capabilities
- **Convex** - Seamless backend infrastructure
- **Clerk** - Robust authentication solution
- **Vercel** - Excellent deployment platform
- **Next.js Team** - Amazing React framework

## 📞 Support

- 📧 Email: mailasaivamshi02@gmail.com
- 📖 Documentation: [Full docs](https://docs.audify.com)
- 🐛 Issues: [GitHub Issues](https://github.com/Ms-vamshi/audify/issues)

## 🌟 Show Your Support

If you found this project helpful, please consider:
- ⭐ Starring the repository
- 🐦 Sharing on social media
- 🤝 Contributing to the codebase
- 📝 Writing a review or blog post

---

**Built with ❤️ using modern web technologies**

*"Democratizing podcast creation, one AI-generated voice at a time."*
