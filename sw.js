// Service Worker לנומרולוגיה יומית
// מספק פונקציונליות אופליין ושמירה במטמון

const CACHE_NAME = 'numerology-v1.0.0';
const urlsToCache = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.webmanifest',
  './icons/favicon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-192.png',
  './icons/maskable-512.png',
  'https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;700&display=swap'
];

// התקנה - שמירת קבצים במטמון
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching files');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('Service Worker: Cached all files successfully');
      })
      .catch(err => {
        console.log('Service Worker: Cache failed', err);
      })
  );
});

// הפעלה - ניקוי מטמון ישן
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// טיפול בבקשות - Cache First Strategy
self.addEventListener('fetch', event => {
  console.log('Service Worker: Fetching', event.request.url);
  
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // אם הקובץ קיים במטמון, החזר אותו
        if (response) {
          console.log('Service Worker: Found in cache', event.request.url);
          return response;
        }
        
        // אחרת, נסה להביא מהרשת
        console.log('Service Worker: Fetching from network', event.request.url);
        return fetch(event.request)
          .then(response => {
            // בדוק שהתגובה תקינה
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // שמור עותק במטמון לפעם הבאה
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          })
          .catch(() => {
            // אם אין רשת ואין מטמון, הצג דף שגיאה פשוט
            if (event.request.destination === 'document') {
              return new Response(`
                <!DOCTYPE html>
                <html lang="he" dir="rtl">
                <head>
                  <meta charset="utf-8">
                  <title>נומרולוגיה יומית - אופליין</title>
                  <style>
                    body { 
                      font-family: system-ui, sans-serif; 
                      text-align: center; 
                      padding: 2rem; 
                      background: #0f172a; 
                      color: white; 
                    }
                    .icon { font-size: 4rem; margin-bottom: 1rem; }
                  </style>
                </head>
                <body>
                  <div class="icon">📱</div>
                  <h1>נומרולוגיה יומית</h1>
                  <p>האפליקציה פועלת במצב אופליין</p>
                  <p>בדקי את החיבור לאינטרנט ונסי שוב</p>
                </body>
                </html>
              `, {
                headers: { 'Content-Type': 'text/html' }
              });
            }
          });
      })
  );
});

// טיפול בהודעות מהאפליקציה הראשית
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// עדכון מטמון כשיש גירסה חדשה
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'UPDATE_CACHE') {
    event.waitUntil(updateCache());
  }
});

async function updateCache() {
  const cache = await caches.open(CACHE_NAME);
  const requests = await cache.keys();
  
  const updatePromises = requests.map(async request => {
    try {
      const response = await fetch(request);
      if (response.status === 200) {
        await cache.put(request, response);
      }
    } catch (error) {
      console.log('Failed to update cache for:', request.url);
    }
  });
  
  await Promise.all(updatePromises);
  console.log('Cache updated successfully');
}
