# 🏛️ DevNante - Portfolio d'Architecture Web & Immobilier

DevNante est une application web vitrine haut de gamme conçue pour un développeur senior spécialisé dans l'immobilier de luxe. Ce projet met l'accent sur une **expérience utilisateur (UX) fluide**, une **architecture Headless** et un design **"Glassmorphism"** moderne.

## 🚀 Aperçu Technique

Ce portfolio est construit avec les technologies les plus performantes du marché pour garantir une fluidité maximale sur mobile, tablette et desktop.

* **Frontend :** React 18
* **Animations :** Framer Motion (Spring physics, Staggered animations)
* **CMS :** WordPress Headless (via REST API)
* **Déploiement :** Vercel (CI/CD)
* **Design :** CSS3 Moderne (Variables, Grid, Flexbox, Aspect-Ratio)

## ✨ Fonctionnalités Clés

* **Header Adaptatif :** Navigation intelligente avec menu mobile optimisé pour le tactile.
* **Grille Immobilière Dynamique :** Affichage des projets récupérés via l'API WordPress avec maintien du ratio d'image (16/10).
* **Modale de Détails Immersive :** Système de vue détaillée avec animation de "rétrécissement" (scale-down) à la fermeture pour une navigation organique.
* **Stack Technique :** Visualisation des compétences via des jauges animées à effet de ressort.
* **Performance :** Lazy loading des images et optimisation des rendus pour un score Lighthouse élevé.

## 🛠️ Installation et Lancement local

1.  **Cloner le projet**
    ```bash
    git clone [https://github.com/Nantenaina-Maminirina-Ranaivosoa/wordpress-futuriste-tech]
    cd DevNante
    ```

2.  **Installer les dépendances**
    ```bash
    npm install
    ```

3.  **Configurer les variables d'environnement**
    Créez un fichier `.env` à la racine :
    ```env
    VITE_WP_API_URL=[https://votre-site-wordpress.com/wp-json/wp/v2](https://votre-site-wordpress.com/wp-json/wp/v2)
    ```

4.  **Lancer le mode développement**
    ```bash
    npm run dev
    ```

## 📐 Architecture de l'Animation

Le projet utilise une physique de ressort personnalisée pour toutes les interactions :
- **Entrée :** `stiffness: 300, damping: 25` pour un mouvement vif mais contrôlé.
- **Sortie :** Transitions synchronisées entre l'overlay et le contenu pour éviter tout scintillement visuel.

## 📄 Licence

Ce projet est sous licence MIT. Libre à vous de l'utiliser et de l'adapter.

---
Développé avec ❤️ par **DEVNANTE**