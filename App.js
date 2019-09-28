/**
 * Sample React Native App Showing Mathematical formulas which contains LatexTest with multiple languages texts using mathjax
 * https://github.com/ashu777
 *
 * @format
 * @flow
 * 
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import MathJax from 'react-native-mathjax';
import {WebView} from 'react-native';
console.disableYellowBox = true;

export default class App extends Component {
      render() {
           return (
             
                    <MathJax
                           // HTML content with MathJax support
                          html={'$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$<br><p>This is an equation यह एक समीकरण है ఇది ఒక సమీకరణం</p>'}
                             // MathJax config option
                          mathJaxOptions=
                          {{
                                 messageStyle: 'none',
                                 extensions: [ 'tex2jax.js' ],
                                 jax: [ 'input/TeX', 'output/HTML-CSS' ],
                                 tex2jax: 
                                 {
                                      inlineMath: [ ['$','$'], ['\\(','\\)'] ],
                                      displayMath: [ ['$$','$$'], ['\\[','\\]'] ],
                                      processEscapes: true,
                                  },
                                  TeX:
                                  {
                                    extensions: ['AMSmath.js','AMSsymbols.js','noErrors.js','noUndefined.js']
                                  }
                          }}
 
                    />
        
               
            );
      }
}


