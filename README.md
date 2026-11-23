# Clinical AI Review — corrected GitHub Pages build (v4)

This package corrects the broken carousel seen in the screenshot. The homepage embeds the three infographic images directly in `index.html` and every page embeds the CSS and JavaScript. Therefore the homepage images and styling work even if GitHub upload accidentally omits `assets/`. The remaining site photos and the book cover still use `assets/` and must be uploaded.

## Publish correctly
1. Download and extract the ZIP. Do **not** upload the ZIP itself.
2. Open the **correct** GitHub repository whose Pages URL you use (the conversation mentions both `tjeevan` and `jeevantjr`; verify ownership).
3. Create a new branch and upload **all** root HTML files and the complete `assets/` folder using GitHub Add file > Upload files.
4. Verify the folder is literally `assets` in the repository root, not `clinical-ai-review-fixed-v4/assets`.
5. Check Settings > Pages: deploy from main branch / (root), or merge the branch first.
6. Wait for deployment and hard refresh (Ctrl+F5).
7. Test `/index.html`, `/about.html`, `/book.html`, and `assets/reviewer.jpg`.

The homepage includes embedded CSS, JS and three compressed WebP hero slides as a deployment safeguard. A future production optimization can extract CSS/JS after confirming reliable uploads. No review results have been fabricated.
