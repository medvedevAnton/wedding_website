Drop your real photos in this folder, then update index.html to use them.

Expected files (referenced as comments in index.html):

- couple.jpg     -> replaces the hero photo placeholder
- og-cover.jpg   -> used as the preview image when the link is shared on
                    WhatsApp/Messenger/iMessage (recommended size: 1200x630px)

Any image works, but for best results:
- Use landscape photos around 1200px wide, compressed as .jpg (keeps the
  page fast to load on mobile data).
- Keep filenames lowercase with no spaces (use dashes, e.g. couple-2.jpg).

To use a photo, replace the placeholder <div class="photo-placeholder">...</div>
block in index.html with, for example:

  <img src="images/couple.jpg" alt="Anton & Tongyu" style="width:100%;max-width:420px;border-radius:6px;">
