# Luxe Jewelry - Premium E-commerce Platform

A sophisticated, AI-powered luxury jewelry e-commerce platform built with Next.js 15, featuring premium design aesthetics and intelligent customer assistance.

## 🌟 Overview

Luxe Jewelry is a full-featured e-commerce platform specializing in handcrafted fine jewelry. The platform combines elegant design with cutting-edge AI technology to provide customers with personalized shopping experiences, expert guidance, and premium service.

## ✨ Key Features

### 🛍️ E-commerce Core

- **Product Catalog**: Comprehensive jewelry collection with detailed specifications
- **Category Navigation**: Organized by jewelry types (Earrings, Rings, Necklaces, Bangles, etc.)
- **Collection Showcase**: Heritage, Contemporary, and Bridal collections
- **Product Search**: Advanced search with filtering capabilities
- **Shopping Cart**: Full cart management with quantity controls
- **Wishlist**: Save favorite items for later
- **User Profiles**: Account management and order history

### 🤖 AI Integration (Powered by Gemini 2.0 Flash)

- **AI Chatbot**: 24/7 intelligent customer support
- **Product Recommendations**: Personalized suggestions based on preferences
- **Care Assistant**: AI-powered jewelry care instructions
- **Size Guide**: Intelligent sizing recommendations
- **Support Assistant**: AI-enhanced customer service

### 🎨 Premium Design

- **Luxury Aesthetics**: Sophisticated design language
- **Responsive Layout**: Optimized for all devices
- **Premium Typography**: Elegant font combinations
- **Smooth Animations**: Polished user interactions
- **High-Quality Images**: Professional product photography

### 📱 User Experience

- **Intuitive Navigation**: Clean, organized interface
- **Fast Performance**: Optimized loading and interactions
- **Accessibility**: WCAG compliant design
- **Mobile-First**: Responsive across all screen sizes

## ��️ Technical Architecture

### Frontend Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component

### AI Integration

- **Provider**: Google Gemini 2.0 Flash
- **Features**:
  - Natural language processing
  - Contextual conversations
  - Product recommendations
  - Care instructions generation
  - Sizing guidance

### Data Management

- **Type Safety**: Full TypeScript implementation
- **State Management**: React hooks and context
- **Local Storage**: Cart and preferences persistence
- **Data Structure**: Normalized product catalog

## 🤖 AI Features Deep Dive

### 1. AI Chatbot

- **Technology**: Gemini 2.0 Flash API
- **Capabilities**:
  - Natural conversation flow
  - Product knowledge base
  - Care and maintenance advice
  - Sizing assistance
  - Order support
- **Fallback System**: Graceful degradation with predefined responses

### 2. Product Recommendations

- **Input**: User preferences and browsing patterns
- **Output**: Personalized product suggestions
- **Features**:
  - Quick preference selection
  - Custom preference input
  - AI-generated explanations
  - Collection-based recommendations

### 3. Care Assistant

- **Functionality**: Personalized jewelry care instructions
- **Inputs**: Jewelry type and material
- **Output**: Detailed care guidelines
- **Coverage**: All jewelry categories and materials

### 4. Size Guide

- **Purpose**: Intelligent sizing recommendations
- **Categories**: Rings, bangles, necklaces, earrings
- **Features**: Measurement tips and professional sizing service info

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18.0 or higher
- npm, yarn, or pnpm package manager
- Gemini API key (for AI features)

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd luxe-jewelry
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install

   # or

   yarn install

   # or

   pnpm install
   \`\`\`

3. **Environment Setup**
   Create a \`.env.local\` file:
   \`\`\`env
   NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev

   # or

   yarn dev

   # or

   pnpm dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### AI Configuration

The AI service is configured in \`lib/gemini.ts\`:

- Model: Gemini 2.0 Flash
- Temperature: 0.7 (balanced creativity/consistency)
- Max tokens: 1024
- Safety settings: Medium and above blocking

### Styling Configuration

Tailwind CSS is configured with:

- Custom color palette for luxury aesthetics
- Premium typography scale
- Responsive breakpoints
- Custom animations and transitions

## 📊 Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **Bundle Optimization**: Tree shaking and dead code elimination
- **Caching**: Efficient caching strategies for static assets
- **Responsive Images**: Multiple image sizes for different devices

## 🔒 Security Features

- **API Key Protection**: Secure handling of sensitive credentials
- **Input Validation**: Sanitization of user inputs
- **XSS Prevention**: Content Security Policy implementation
- **Safe AI Responses**: Content filtering and safety checks

## 🎯 SEO & Accessibility

- **Meta Tags**: Comprehensive SEO optimization
- **Structured Data**: Rich snippets for products
- **Alt Text**: Descriptive image alternatives
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: ARIA labels and semantic HTML

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

The application can be deployed on any platform supporting Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🧪 Testing

### Manual Testing Checklist

- [ ] Product browsing and search
- [ ] Cart functionality
- [ ] AI chatbot responses
- [ ] Responsive design
- [ ] Performance metrics
- [ ] Accessibility compliance

## 📈 Analytics & Monitoring

Consider integrating:

- Google Analytics 4
- Vercel Analytics
- Error tracking (Sentry)
- Performance monitoring
- AI usage metrics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Aryan Singh**
- Portfolio: [https://singhtwenty2.pages.dev/](https://singhtwenty2.pages.dev/)

## 🙏 Acknowledgments

- **Google Gemini AI** for intelligent features
- **Vercel** for hosting and deployment
- **shadcn/ui** for beautiful UI components
- **Tailwind CSS** for styling framework
- **Next.js** team for the amazing framework

---

_Built with using Next.js 15 and Gemini AI_
