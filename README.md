# Typst
typst watch --features html --format html static/content/index.typ static/content/index.html

# Pandoc
pandoc -s static/content/index.md -o static/content/index.html --mathjax