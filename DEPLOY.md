# 🚀 מדריך פריסה מהיר

## הרצה מקומית מיידית
האפליקציה רצה כרגע ב: **http://localhost:3000**

פתחי דפדפן נוסף ולכי לכתובת הזו לבדיקה.

## פריסה ל-GitHub Pages (5 דקות)

### שלב 1: יצירת Repository
1. לכי ל-GitHub.com ופתחי account
2. לחצי "New Repository" 
3. קראי לו: `numerology-daily` (או שם אחר)
4. סמני "Public"
5. לחצי "Create repository"

### שלב 2: העלאת קבצים
**אופציה א' - ממשק GitHub (קל):**
1. ב-repository החדש, לחצי "uploading an existing file"
2. גררי את כל הקבצים מהתיקייה שלך (פרט לקובץ הזה)
3. כתבי commit message: "יצירת אפליקציית נומרולוגיה יומית"
4. לחצי "Commit changes"

**אופציה ב' - Terminal (מתקדם):**
```bash
cd "/Users/kseniachudnovskaya/Desktop/Human Desigh "
git init
git add .
git commit -m "יצירת אפליקציית נומרולוגיה יומית"
git branch -M main
git remote add origin https://github.com/[USERNAME]/[REPO-NAME].git
git push -u origin main
```

### שלב 3: הפעלת GitHub Pages
1. ב-repository, לכי ל-Settings (למעלה)
2. בתפריט צד שמאל: Pages
3. תחת "Source": בחרי "Deploy from a branch"
4. Branch: `main`, Folder: `/ (root)`
5. לחצי "Save"

### שלב 4: גישה לאפליקציה
אחרי 2-3 דקות, האפליקציה תהיה זמינה בכתובת:
**https://[USERNAME].github.io/[REPO-NAME]**

## 📱 בדיקת PWA

### במחשב (Chrome):
1. פתחי את האתר
2. בשורת כתובות תראי אייקון התקנה ⬇️
3. לחצי עליו ← "התקן"

### בנייד (Safari/Chrome):
1. פתחי את האתר
2. Safari: כפתור שיתוף → "הוספה למסך הבית"
3. Chrome: תפריט → "הוספה למסך הבית"

## ✅ רשימת בדיקות

- [ ] האתר עובד ב-localhost:3000
- [ ] בחירת תאריך מציגה מספר ואנרגיה
- [ ] כפתור "להיום" עובד
- [ ] מתג מספרי מאסטר עובד
- [ ] כפתור שיתוף עובד
- [ ] עיצוב נראה טוב במובייל
- [ ] העלאה ל-GitHub
- [ ] הפעלת GitHub Pages
- [ ] בדיקת התקנה כ-PWA

## 🔧 התאמות אחרונות

אם את רוצה לשנות משהו לפני הפריסה:
- **צבעים**: ערכי את `styles.css` (שורה 3-16)
- **טקסטים**: ערכי את `app.js` (שורות 60-200)
- **אייקון**: החליפי את `icons/favicon.svg`

---
**מוכנה לפריסה! 🎉**
