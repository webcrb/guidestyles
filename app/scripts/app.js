'use strict';

/**
 * @ngdoc overview
 * @name charteApp
 * @description
 * # charteApp
 *
 * Main module of the application.
 */
angular.module('charteApp', ['ngAnimate'])

.controller('MainCtrl', ['$scope', function ($scope) {

  
    
   $scope.colors = [
      {id:'territoire', name:'Territoire', ref:'#5a76ab'},
      {id:'economie', name:'Économie', ref:'#ffc90d'},
      {id:'formation', name:'Formation', ref:'#e31818'},
      {id:'education', name:'Éducation', ref:'#12809c'},
      {id:'transport', name:'Transport', ref:'#7d7566'},
      {id:'environnement', name:'Environnement', ref:'#468419'},
      {id:'culture', name:'Culture', ref:'#d32b75'},
      {id:'tourisme', name:'Tourisme', ref:'#906A83'},
      {id:'europe', name:'Europe', ref:'#3d5db4'},
      {id:'bleu', name:'Bleu logo', ref:'#00286b'},
      {id:'vert', name:'Vert Logo', ref:'#b1c800'},
      {id:'interne', name:'Interne', ref:'#78bfcc'}
    ];

    $scope.thematique = $scope.colors[0];

    $scope.theme = function (color) {
      $scope.thematique = color;
    }

    $scope.sections =  [
      {id:'typo', name:'Typographie', url:'sections/typo.html'},
      {id:'color', name:'Couleurs', url:'sections/color.html', keywords: 'territoire, économie, formation, éducation, transport, environnement, culture, tourisme, europe, logo, interne'},
      {id:'button', name:'Boutons', url:'sections/button.html', keywords:'btn'},
      {id:'contextual', name:'Classes contextuelles', url:'sections/contextual.html', keywords:'text encadres border zoom well'},
      // {id:'tables', name:'Tableaux', url:'sections/table.html', keywords:'tableau, colonnes'},
      {id:'pagination', name:'Pagination', url:'sections/pagination.html', keywords:'pages, pagination'},
      {id:'label', name:'Labels & badges', url:'sections/label.html', keywords:'label, badge, tags'},
      {id:'breadcrumb', name:'Fil d\'ariane', url:'sections/breadcrumb.html', keywords:'fil ariane'},
      {id:'navs', name:'Listes de navigation', url:'sections/navs.html', keywords:'list, pills, tabs'},
      {id:'navbar', name:'Barres de navigation', url:'sections/navbar.html', keywords:'navigation, barre, bar, menu, top, rubriques'},
      {id:'section', name:'Sections', url:'sections/sections.html', keywords:'footer'},
      {id:'pictos', name:'Pictogrammes', url:'sections/pictos.html', keywords:''},

    ]

  }]);