# Noah Adasi — Academic Personal Website

### Updating the site later
Edit any HTML file → commit → push. GitHub Pages rebuilds in ~30 seconds.

---

## 🌐 Custom domain (optional, e.g. `noahadasi.com`)

1. Buy a domain (Namecheap, Porkbun, Google Domains, etc.).
2. In your repo, create a file named **`CNAME`** containing one line: your
   domain (e.g. `noahadasi.com`).
3. At your domain registrar, add these DNS records:
   ```
   Type: A     Host: @     Value: 185.199.108.153
   Type: A     Host: @     Value: 185.199.109.153
   Type: A     Host: @     Value: 185.199.110.153
   Type: A     Host: @     Value: 185.199.111.153
   Type: CNAME Host: www   Value: YOURUSERNAME.github.io
   ```
4. Back in **Settings → Pages**, type your custom domain and check **Enforce HTTPS**.
   Wait 5–60 minutes for DNS to propagate.

---

## 🔍 Test locally (optional)

You can just double-click `index.html` to open it in a browser. For a more
realistic preview that handles relative links correctly:

```bash
# Python 3 (no install needed on Mac/Linux)
cd noah-academic-site
python3 -m http.server 8000
# Then open http://localhost:8000
```
