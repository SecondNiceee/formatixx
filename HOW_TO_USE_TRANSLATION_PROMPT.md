# How to Use the Translation Prompt Template

This guide explains how to use `TRANSLATION_PROMPT_TEMPLATE.md` to translate any learning section into 4 languages.

## Quick Start

1. Open `TRANSLATION_PROMPT_TEMPLATE.md`
2. Copy the entire prompt starting from "### PROMPT TO TRANSLATE A NEW SECTION"
3. Replace the placeholders with your section information
4. Paste it into an AI assistant (Claude, ChatGPT, etc.)
5. The AI will provide translations in JSON format
6. Copy the JSON output and add it to the translations file

## Step-by-Step Instructions

### Step 1: Gather Section Information

Before using the prompt, collect this information about the section you want to translate:

- **Section Name** (camelCase key, e.g., `moneyMakers`, `readingMarket`)
- **Section Title** (e.g., "The Money Makers")
- **Section Subtitle** (e.g., "What Moves Markets")
- **List of all lessons** with their titles

**Example for "The Money Makers" section:**
```
Section Name: moneyMakers
Section Title: The Money Makers
Section Subtitle: What Moves Markets
Lessons:
- basics (Basics)
- language (The Language of Binary Options)
- fundamentals (Following the Fundamentals)
- gold (Gold Prices and Binary Options)
- stocks (Investing in Stocks vs Binary Options)
- crudeOil (Crude Oil Prices and Binary Options)
```

### Step 2: Prepare the Prompt

Open `TRANSLATION_PROMPT_TEMPLATE.md` and identify these sections:

1. **Section Information** - Fill in all placeholders
2. **Lesson Content** - Describe what content needs translation
3. **Quiz Content** - Describe quiz questions if applicable
4. **Output Format** - Shows the expected JSON structure

### Step 3: Fill in the Placeholders

Replace all `[REPLACE WITH ...]` placeholders:

```
Section Name: [REPLACE WITH SECTION NAME]
    ↓
Section Name: moneyMakers

Section Title: [REPLACE WITH ENGLISH TITLE]
    ↓
Section Title: The Money Makers

Lessons in this section:
- [LESSON 1 NAME]
    ↓
- Basics
```

### Step 4: Copy the Complete Prompt

Copy everything from "### PROMPT TO TRANSLATE A NEW SECTION" to the end of the JSON example.

### Step 5: Paste into AI Assistant

Paste the completed prompt into:
- ChatGPT (openai.com)
- Claude (claude.ai)
- Any other AI assistant
- Even multiple AI systems to compare translations

**Pro Tip:** The prompt is designed to work with any AI. You'll get the best results with advanced models like Claude 3+ or GPT-4.

### Step 6: Review and Copy Translation Output

The AI will provide JSON formatted translations. Copy the entire JSON response.

### Step 7: Add to Translations File

Open `lib/i18n/translations.ts` and add the translations:

1. For English (en) section:
   - Add new common keys to `t.common`
   - Add new section to `t.learning.section2` (or appropriate section)
   - Add lessons with content and quiz

2. Repeat for Spanish (es), Portuguese (pt), and Arabic (ar)

Example structure:
```typescript
en: {
  common: {
    newLessonKey: "New Lesson Title",
  },
  learning: {
    section2: {
      title: "Section Title",
      subtitle: "Section Subtitle",
    },
    lessons: {
      lessonKey: {
        title: "Lesson Title",
        sections: { ... },
        quiz: { ... }
      }
    }
  }
}
```

### Step 8: Update Lesson Pages

For each lesson in the section, create or update:

1. **Lesson Page** (`app/learning/[lesson-route]/page.tsx`):
   ```typescript
   "use client"
   import { useLanguage } from "@/lib/i18n/language-context"
   
   export default function LessonPage() {
     const { t } = useLanguage()
     return (
       <LessonLayout
         title={t.common.lessonKey}
         category={t.learning.section2.title}
         nextLesson={{
           title: t.common.nextLessonKey,
           href: "/learning/next-lesson",
         }}
         ContentComponent={LessonContent}
         QuizComponent={LessonQuiz}
       />
     )
   }
   ```

2. **Content Component** (`components/learning/[lesson]-content.tsx`):
   ```typescript
   "use client"
   import { useLanguage } from "@/lib/i18n/language-context"
   
   export function LessonContent() {
     const { t } = useLanguage()
     const s = t.learning.lessons.lessonKey.sections
     return <div>{s.intro} {s.content1} ...</div>
   }
   ```

3. **Quiz Component** (`components/learning/[lesson]-quiz.tsx`):
   ```typescript
   "use client"
   import { useLanguage } from "@/lib/i18n/language-context"
   
   export function LessonQuiz() {
     const { t } = useLanguage()
     const q = t.learning.lessons.lessonKey.quiz
     // Build questions using q.q1, q.q1o1, etc.
   }
   ```

### Step 9: Update Learning Hub

Update `app/learning/page.tsx` to use translated lesson titles:

```typescript
const getLearningTopics = (t: any) => [
  // ... existing sections ...
  {
    id: 2,
    title: t.learning.section2.title,
    subtitle: t.learning.section2.subtitle,
    lessons: [
      { title: t.common.basics, href: "/learning/basics-binary" },
      { title: t.common.language, href: "/learning/language-binary" },
      // ... other lessons ...
    ],
  },
]
```

### Step 10: Test All Languages

1. Open the learning hub (`/learning`)
2. Use the language switcher in the header
3. Verify that:
   - Section title translates
   - Section subtitle translates
   - All lesson titles translate
   - Clicking on a lesson shows translated page header
   - Quiz questions translate
   - All buttons translate

## Common Issues and Solutions

### Issue: "AI doesn't understand what to translate"
**Solution:** Copy the exact prompt template. It's specifically designed to be clear to AI systems.

### Issue: "Translations are incomplete or missing"
**Solution:** Make sure to fill in ALL placeholders including every lesson name and any quiz questions.

### Issue: "JSON format is incorrect"
**Solution:** Ask the AI to "reformat the JSON" or "provide only valid JSON output".

### Issue: "Some translations are awkward or unnatural"
**Solution:** Ask the AI to "review and improve the naturalness of translations" or "make them more colloquial".

## Tips for Best Results

1. **Provide Context:** The more detail you give about the financial/trading content, the better
2. **Include Examples:** If content mentions specific examples, include them
3. **Ask for Consistency:** Request that technical terms be consistent across all translations
4. **Review Quality:** Always review translations for accuracy in the context of financial trading
5. **Iterate:** If translations need improvement, ask the AI to refine them
6. **Test Thoroughly:** Always test all 4 languages before considering a section complete

## Example: Complete Translation Request

Here's a complete example you can copy and modify:

```
### Background
I have a trading education website with multi-language support. I need to translate "The Money Makers" section into 4 languages: English, Spanish, Portuguese, and Arabic.

### Section Information
**Section Name:** moneyMakers
**Section Title:** The Money Makers
**Section Subtitle:** What Moves Markets
**Lessons in this section:**
- Basics
- The Language of Binary Options
- Following the Fundamentals
- Gold Prices and Binary Options
- Investing in Stocks vs Binary Options
- Crude Oil Prices and Binary Options

### What Needs Translation

Please provide translations for the section title and subtitle only (lesson titles are done separately):

**Section Title:** The Money Makers
**Section Subtitle:** What Moves Markets

### Output Format

Please provide the translations in JSON format with keys: `en`, `es`, `pt`, `ar` for the section2 title and subtitle.
```

## Need Help?

Refer to these files for more information:
- `TRANSLATION_GUIDE.md` - Detailed guide on translation structure
- `TRANSLATION_PROMPT_TEMPLATE.md` - The template to copy and use
- `app/learning/why-trade-binary/page.tsx` - Example of a translated lesson page
- `components/learning/why-trade-binary-content.tsx` - Example of a translated content component
- `components/learning/why-trade-binary-quiz.tsx` - Example of a translated quiz component
