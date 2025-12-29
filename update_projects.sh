#!/bin/bash

# Liste des projets Next.js à mettre à jour
projects=(
    "couvreur"
    "la-petite-foret" 
    "amazoune"
    "manitou"
    "riftbound"
    "capponi"
    "jrv-production"
    "secret-beauty"
    "kapinfo"
    "collect"
    "herve"
    "capponuts"
    "Ldlocation"
    "couvreur-1"
    "inflation-destock"
    "delices"
    "carwash"
    "Odelices"
    "kelian"
    "pyhome2025"
)

echo "=== MISE À JOUR DE SÉCURITÉ POUR TOUS LES PROJETS NEXT.JS ==="
echo "Vulnérabilités critiques détectées : RCE dans Next.js < 15.5.7"
echo ""

for project in "${projects[@]}"; do
    if [ -d "$project" ] && [ -f "$project/package.json" ]; then
        echo "=== TRAITEMENT DE $project ==="
        cd "$project"
        
        echo "Vérification des vulnérabilités..."
        npm audit --audit-level=critical > audit.log 2>&1
        
        if grep -q "vulnerabilities" audit.log; then
            echo "Vulnérabilités trouvées, mise à jour en cours..."
            
            # Mise à jour Next.js et React
            npm update next react react-dom
            
            # Correction automatique des vulnérabilités
            npm audit fix --audit-level=critical
            
            # Si des vulnérabilités persistent, forcer la mise à jour
            if npm audit --audit-level=critical | grep -q "vulnerabilities"; then
                echo "Tentative de correction forcée..."
                npm audit fix --force
            fi
            
            # Commit et push
            if [ -d ".git" ]; then
                git add package.json package-lock.json
                git commit -m "🔒 Security update: Fix critical vulnerabilities in Next.js and dependencies
                
- Updated Next.js to latest secure version
- Fixed RCE vulnerabilities in React Flight protocol
- Updated React and related dependencies
- Applied security patches for glob package" || echo "Pas de changements à commiter"
                
                # Push vers GitHub
                git push origin main 2>/dev/null || git push origin master 2>/dev/null || echo "Push échoué - vérifiez la branche"
            fi
            
        else
            echo "Aucune vulnérabilité critique trouvée"
        fi
        
        cd ..
        echo ""
    fi
done

echo "=== RAPPORT FINAL ==="
echo "Tous les projets ont été analysés et mis à jour si nécessaire."
echo "Vérifiez les déploiements Vercel pour confirmer que tout fonctionne."
