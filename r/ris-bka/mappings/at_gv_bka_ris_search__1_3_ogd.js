var at_gv_bka_ris_search__1_3_ogd_Module_Factory = function () {
  var at_gv_bka_ris_search__1_3_ogd = {
    n: 'at_gv_bka_ris_search__1_3_ogd',
    dens: 'http:\/\/ris.bka.gv.at\/Search\/1.3\/OGD',
    tis: [{
        ln: 'PhraseSearchExpression',
        bti: '.SearchExpression',
        ps: [{
            n: 'value',
            en: 'Value'
          }]
      }, {
        ln: 'ArrayOfSearchExpression',
        ps: [{
            n: 'searchExpression',
            col: true,
            en: 'SearchExpression',
            ti: '.SearchExpression'
          }]
      }, {
        ln: 'AndSearchExpression',
        bti: '.BooleanSearchExpression'
      }, {
        ln: 'BooleanSearchExpression',
        bti: '.SearchExpression',
        ps: [{
            n: 'expressions',
            en: 'Expressions',
            ti: '.ArrayOfSearchExpression'
          }]
      }, {
        ln: 'NormabschnittSucheinschraenkung',
        ps: [{
            n: 'nummerVon',
            en: 'NummerVon',
            ti: 'Int'
          }, {
            n: 'buchstabeVon',
            en: 'BuchstabeVon'
          }, {
            n: 'nummerBis',
            en: 'NummerBis',
            ti: 'Int'
          }, {
            n: 'buchstabeBis',
            en: 'BuchstabeBis'
          }, {
            n: 'typ',
            en: 'Typ'
          }]
      }, {
        ln: 'BundesnormenSortExpression',
        ps: [{
            n: 'sortDirection',
            en: 'SortDirection'
          }, {
            n: 'sortedByColumn',
            en: 'SortedByColumn'
          }]
      }, {
        ln: 'OrSearchExpression',
        bti: '.BooleanSearchExpression'
      }, {
        ln: 'TOGDSearchRequest',
        ps: [{
            n: 'suchworte',
            en: 'Suchworte',
            ti: '.SearchExpression'
          }, {
            n: 'titel',
            en: 'Titel',
            ti: '.SearchExpression'
          }, {
            n: 'index',
            en: 'Index',
            ti: '.SearchExpression'
          }, {
            n: 'abschnitt',
            en: 'Abschnitt',
            ti: '.NormabschnittSucheinschraenkung'
          }, {
            n: 'fassungVom',
            en: 'FassungVom',
            ti: 'Calendar'
          }, {
            n: 'kundmachungsorgan',
            en: 'Kundmachungsorgan',
            ti: '.PhraseSearchExpression'
          }, {
            n: 'kundmachungsorgannummer',
            en: 'Kundmachungsorgannummer',
            ti: '.PhraseSearchExpression'
          }, {
            n: 'imRisSeit',
            en: 'ImRisSeit'
          }, {
            n: 'dokumenteProSeite',
            en: 'DokumenteProSeite'
          }, {
            n: 'seitennummer',
            en: 'Seitennummer',
            ti: 'Int'
          }, {
            n: 'sortierung',
            en: 'Sortierung',
            ti: '.BundesnormenSortExpression'
          }]
      }, {
        ln: 'TermSearchExpression',
        bti: '.SearchExpression',
        ps: [{
            n: 'value',
            en: 'Value'
          }]
      }, {
        ln: 'NotSearchExpression',
        bti: '.SearchExpression',
        ps: [{
            n: 'expression',
            en: 'Expression',
            ti: '.SearchExpression'
          }]
      }, {
        ln: 'SearchExpression'
      }, {
        t: 'enum',
        ln: 'WebSortDirection',
        vs: ['Ascending', 'Descending']
      }, {
        t: 'enum',
        ln: 'PageSize',
        vs: ['Ten', 'Twenty', 'Fifty', 'OneHundred']
      }, {
        t: 'enum',
        ln: 'ChangeSetInterval',
        vs: ['Undefined', 'EinerWoche', 'ZweiWochen', 'EinemMonat', 'DreiMonaten', 'SechsMonaten', 'EinemJahr']
      }, {
        t: 'enum',
        ln: 'NormabschnittTyp',
        vs: ['Alle', 'Artikel', 'Paragraph', 'Anlage']
      }, {
        t: 'enum',
        ln: 'BundesnormenSortableColumn',
        vs: ['ArtikelParagraphAnlage', 'Kurzinformation']
      }],
    eis: [{
        en: 'OGDSearchRequest',
        ti: '.TOGDSearchRequest'
      }]
  };
  return {
    at_gv_bka_ris_search__1_3_ogd: at_gv_bka_ris_search__1_3_ogd
  };
};
if (typeof define === 'function' && define.amd) {
  define([], at_gv_bka_ris_search__1_3_ogd_Module_Factory);
}
else {
  var at_gv_bka_ris_search__1_3_ogd_Module = at_gv_bka_ris_search__1_3_ogd_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.at_gv_bka_ris_search__1_3_ogd = at_gv_bka_ris_search__1_3_ogd_Module.at_gv_bka_ris_search__1_3_ogd;
  }
  else {
    var at_gv_bka_ris_search__1_3_ogd = at_gv_bka_ris_search__1_3_ogd_Module.at_gv_bka_ris_search__1_3_ogd;
  }
}