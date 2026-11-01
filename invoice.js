document.addEventListener('DOMContentLoaded', function () {

    /**
     * TODO: Initialiser l'état de la facture dès que la page est chargée
     * - Sélectionner toutes les lignes du tableau
     * - Appeler updateItemTotal sur chaque ligne pour recalculer les totaux existants
     * - Appeler updateInvoiceTotal pour afficher le total global correct
     */

    // Ces références seront réutilisées dans plusieurs fonctions
    const invoiceTable = document.getElementById('invoiceTable').getElementsByTagName('tbody')[0];
    const invoiceTotal = document.getElementById('invoiceTotal');

    // const alllignesintable = document.querySelector('tbody');
    // const updateItemTotal = document.queryselector('.itemTotal');
    // const updateInvoiceTotal = document.getElementById('invoiceTotal');

    const quantityInput = document.querySelector('.quantity')
    const unitPriceInput = document.querySelector('.unitPrice')

    console.log(invoiceTable);
    console.log(invoiceTotal);

    invoiceTable.addEventListener('input', handleTableInput);
    updateInvoiceTotal();




    function handleTableInput(event) {
        const target = event.target;
        if (target.classList.contains('quantity') || target.classList.contains('unitPrice')) {
            const row = target.closest('tr');
            // Defensive Programming
            if (row) {
                updateItemTotal(row);
                updateInvoiceTotal();
            }
        }
    }
    /**
     * Fonction pour mettre à jour le total d'un article (ligne du tableau)
     * TODO:
     * - Récupérer les inputs .quantity et .unitPrice à l'intérieur de `row`
     * - Convertir leurs valeurs en nombres (parseFloat / Number)
     * - Calculer le total (quantité * prix)
     * - Mettre à jour la cellule .itemTotal avec un format à deux décimales
     * - Retourner le total calculé afin de pouvoir le réutiliser
     */
    function updateItemTotal(row) {

        const quantityInput = row.querySelector('.quantity').value
        const unitPriceInput = row.querySelector('.unitPrice').value

        const quantityresult = Number(quantityInput);
        const unitPriceresult = parseFloat(unitPriceInput);

        const itemTotal = quantityresult * unitPriceresult
        console.log(itemTotal)

        const itemTotalCell = row.querySelector('.itemTotal')
        itemTotalCell.textContent = itemTotal.toFixed(2);

        return itemTotal

    }


    /**
     * Fonction pour mettre à jour le total global de la facture
     * TODO:
     * - Parcourir toutes les lignes du corps du tableau
     * - Utiliser updateItemTotal(row) pour récupérer chaque total (ou lire la cellule .itemTotal)
     * - Additionner tous les totaux de lignes
     * - Mettre à jour le texte de `invoiceTotal` avec la somme formatée en deux décimales
     */
    function updateInvoiceTotal() {
        let bigTotal = 0;
        const rows = invoiceTable.querySelectorAll('tr')
        rows.forEach(row => {
            const rowTotal = updateItemTotal(row)
            bigTotal += rowTotal

        });
        invoiceTotal.textContent = bigTotal.toFixed(2);
    }


    /**
     * Fonction pour ajouter une nouvelle ligne d'article dans la facture
     * TODO:
     * - Créer un nouvel élément <tr>
     * - Ajouter les cellules nécessaires (nom, inputs quantité/prix, total)
     * - Veiller à ce que les inputs aient les mêmes classes que les autres lignes
     * - Ajouter des écouteurs d'événement sur les inputs pour recalculer les totaux en direct
     * - Insérer la nouvelle ligne dans `invoiceTable`
     * - Appeler updateInvoiceTotal pour recalculer le total global après l'ajout
     */
    function addNewItem() {


    }


    /**
     * Bonus facultatif si les TODO précédents sont terminés:
     * - Ajouter un bouton "Supprimer" sur chaque ligne
     * - Lorsque l'utilisateur clique dessus, retirer la ligne et recalculer le total via updateInvoiceTotal
     */

});
