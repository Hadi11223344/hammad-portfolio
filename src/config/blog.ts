export const blogPosts = [
  {
    id: "fastapi-structure",
    title: "How I Structure FastAPI Projects for Scale",
    excerpt: "Learn my proven project structure for building maintainable FastAPI applications that can handle growth from prototype to production.",
    content: `# How I Structure FastAPI Projects for Scale

Building scalable FastAPI applications requires careful planning and a solid project structure. After working on multiple FastAPI projects, I've developed a structure that works well for both small prototypes and production applications.

## Project Structure

\`\`\`
project/
├── app/
│   ├── __init__.py
│   ├── main.py
│   ├── core/
│   │   ├── config.py
│   │   ├── security.py
│   │   └── database.py
│   ├── api/
│   │   ├── __init__.py
│   │   ├── deps.py
│   │   └── v1/
│   │       ├── __init__.py
│   │       ├── endpoints/
│   │       └── api.py
│   ├── models/
│   ├── schemas/
│   ├── services/
│   └── utils/
├── tests/
├── alembic/
├── requirements.txt
└── docker-compose.yml
\`\`\`

## Key Benefits

This structure separates concerns cleanly and makes it easy to:
- Scale your team
- Add new features
- Maintain code quality
- Deploy with confidence

The separation between models, schemas, and services ensures your business logic stays clean and testable.`,
    author: "Alex Alex",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["backend", "fastapi", "python"],
    image: "/placeholder-blog-fastapi.jpg",
    published: true,
    featured: true
  },
  {
    id: "embeddings-recommendations", 
    title: "Simple Embeddings + K-Means for Fashion Recommendations",
    excerpt: "Discover how to build a recommendation system using CNN embeddings and clustering algorithms for personalized fashion suggestions.",
    content: `# Simple Embeddings + K-Means for Fashion Recommendations

Building a recommendation system doesn't always require complex deep learning architectures. Sometimes, a simple approach with embeddings and clustering can deliver surprising results.

## The Approach

For StyleSense, I used:
1. **CNN Feature Extraction**: Pre-trained models to generate image embeddings
2. **K-Means Clustering**: Group similar items together
3. **User Feedback Loop**: Improve recommendations over time

## Implementation

\`\`\`python
import numpy as np
from sklearn.cluster import KMeans
from tensorflow.keras.applications import ResNet50
from tensorflow.keras.preprocessing import image

class FashionRecommender:
    def __init__(self, n_clusters=50):
        self.model = ResNet50(weights='imagenet', include_top=False, pooling='avg')
        self.kmeans = KMeans(n_clusters=n_clusters)
        self.embeddings = []
        
    def extract_features(self, img_path):
        img = image.load_img(img_path, target_size=(224, 224))
        img_array = image.img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0)
        return self.model.predict(img_array)
\`\`\`

## Results

Achieved 85%+ user satisfaction in initial testing with this simple approach!`,
    author: "Alex Alex", 
    date: "2024-02-03",
    readTime: "7 min read",
    tags: ["ai", "ml", "recommender"],
    image: "/placeholder-blog-embeddings.jpg",
    published: true,
    featured: false
  },
  {
    id: "spring-to-django",
    title: "From Spring Boot to Django: What Transfers Well",
    excerpt: "My experience transitioning from Java Spring Boot to Python Django and the concepts that translate between these powerful frameworks.",
    content: `# From Spring Boot to Django: What Transfers Well

After spending time with Spring Boot, transitioning to Django was both familiar and surprising. Here's what I learned about the similarities and differences.

## What Transfers Well

### 1. MVC Architecture
Both frameworks follow the MVC pattern:
- **Spring Boot**: Controller → Service → Repository
- **Django**: View → Model → Template (though Django calls it MTV)

### 2. Dependency Injection
Spring's DI concept translates to Django's app structure and middleware.

### 3. ORM Concepts
JPA entities are similar to Django models, though Django's ORM is more pythonic.

## Key Differences

### Configuration
- **Spring Boot**: Annotation-heavy, application.properties
- **Django**: settings.py, more explicit configuration

### Request Handling
\`\`\`python
# Django
from django.http import JsonResponse

def api_view(request):
    return JsonResponse({'message': 'Hello'})
\`\`\`

vs

\`\`\`java
// Spring Boot
@RestController
public class ApiController {
    @GetMapping("/api")
    public ResponseEntity<Map<String, String>> apiEndpoint() {
        return ResponseEntity.ok(Map.of("message", "Hello"));
    }
}
\`\`\`

The transition taught me that architectural patterns are more important than specific framework syntax.`,
    author: "Alex Alex",
    date: "2024-03-12", 
    readTime: "6 min read",
    tags: ["backend", "java", "python"],
    image: "/placeholder-blog-frameworks.jpg",
    published: true,
    featured: false
  }
];

export const blogCategories = [
  { id: "all", name: "All", count: blogPosts.length },
  { id: "backend", name: "Backend", count: blogPosts.filter(p => p.tags.includes("backend")).length },
  { id: "ai", name: "AI/ML", count: blogPosts.filter(p => p.tags.includes("ai") || p.tags.includes("ml")).length },
  { id: "python", name: "Python", count: blogPosts.filter(p => p.tags.includes("python")).length },
  { id: "java", name: "Java", count: blogPosts.filter(p => p.tags.includes("java")).length }
];

export const featuredPosts = blogPosts.filter(post => post.featured);