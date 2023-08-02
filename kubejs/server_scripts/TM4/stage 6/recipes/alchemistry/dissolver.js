ServerEvents.recipes((event) => {
     // Грибоний
     event.custom({
        'type': 'alchemistry:dissolver',
        'group': 'alchemistry:dissolver',
        'input': {
          'ingredient': {
            'item': 'chemlib:gribony_block'
          },
          'count': 1
        },
        'output': {
          'rolls': 1,
          'weighted': false,
          'groups': [
            {
                'probability': 100.0,
                'results': [
                    {
                        'item': 'chemlib:gribony',
                        'count': 64
                    },
                    {
                        'item': 'chemlib:gribony',
                        'count': 64
                    },
                    {
                        'item': 'chemlib:gribony',
                        'count': 16
                    }
                ]
            }
          ]    
        }
    })

    event.custom({
        'type': 'alchemistry:dissolver',
        'group': 'alchemistry:dissolver',
        'input': {
          'ingredient': {
            'item': 'chemlib:gribony_ingot'
          },
          'count': 1
        },
        'output': {
          'rolls': 1,
          'weighted': false,
          'groups': [
            {
                'probability': 100.0,
                'results': [
                    {
                        'item': 'chemlib:gribony',
                        'count': 16
                    }
                ]
            }
          ]    
        }
    })

    event.custom({
        'type': 'alchemistry:dissolver',
        'group': 'alchemistry:dissolver',
        'input': {
          'ingredient': {
            'item': 'chemlib:gribony_dust'
          },
          'count': 1
        },
        'output': {
          'rolls': 1,
          'weighted': false,
          'groups': [
            {
                'probability': 100.0,
                'results': [
                    {
                        'item': 'chemlib:gribony',
                        'count': 16
                    }
                ]
            }
          ]    
        }
    })
    
     event.custom({
        'type': 'alchemistry:dissolver',
        'group': 'alchemistry:dissolver',
        'input': {
          'ingredient': {
            'item': 'chemlib:pre_gribony_block'
          },
          'count': 1
        },
        'output': {
          'rolls': 1,
          'weighted': false,
          'groups': [
            {
                'probability': 100.0,
                'results': [
                    {
                        'item': 'chemlib:pre_gribony',
                        'count': 64
                    },
                    {
                        'item': 'chemlib:pre_gribony',
                        'count': 64
                    },
                    {
                        'item': 'chemlib:pre_gribony',
                        'count': 16
                    }
                ]
            }
          ] 
        }
    })

    event.custom({
        'type': 'alchemistry:dissolver',
        'group': 'alchemistry:dissolver',
        'input': {
          'ingredient': {
            'item': 'chemlib:pre_gribony_ingot'
          },
          'count': 1
        },
        'output': {
          'rolls': 1,
          'weighted': false,
          'groups': [
            {
                'probability': 100.0,
                'results': [
                    {
                        'item': 'chemlib:pre_gribony',
                        'count': 16
                    }
                ]
            }
          ] 
        }
    })

    event.custom({
        'type': 'alchemistry:dissolver',
        'group': 'alchemistry:dissolver',
        'input': {
          'ingredient': {
            'item': 'chemlib:pre_gribony_dust'
          },
          'count': 1
        },
        'output': {
          'rolls': 1,
          'weighted': false,
          'groups': [
            {
                'probability': 100.0,
                'results': [
                    {
                        'item': 'chemlib:pre_gribony',
                        'count': 16
                    }
                ]
            }
          ] 
        }
    })

     event.custom({
        'type': 'alchemistry:dissolver',
        'group': 'alchemistry:dissolver',
        'input': {
          'ingredient': {
            'item': 'chemlib:unstable_gribony_block'
          },
          'count': 1
        },
        'output': {
          'rolls': 1,
          'weighted': false,
          'groups': [
            {
                'probability': 100.0,
                'results': [
                    {
                        'item': 'chemlib:unstable_gribony',
                        'count': 64
                    },
                    {
                        'item': 'chemlib:unstable_gribony',
                        'count': 64
                    },                    
                    {
                        'item': 'chemlib:unstable_gribony',
                        'count':16
                    }
                ]
            }
          ] 
        }
    })

    event.custom({
        'type': 'alchemistry:dissolver',
        'group': 'alchemistry:dissolver',
        'input': {
          'ingredient': {
            'item': 'chemlib:unstable_gribony_ingot'
          },
          'count': 1
        },
        'output': {
          'rolls': 1,
          'weighted': false,
          'groups': [
            {
                'probability': 100.0,
                'results': [                  
                    {
                        'item': 'chemlib:unstable_gribony',
                        'count':16
                    }
                ]
            }
          ] 
        }
    })

    event.custom({
        'type': 'alchemistry:dissolver',
        'group': 'alchemistry:dissolver',
        'input': {
          'ingredient': {
            'item': 'chemlib:unstable_gribony_dust'
          },
          'count': 1
        },
        'output': {
          'rolls': 1,
          'weighted': false,
          'groups': [
            {
                'probability': 100.0,
                'results': [                 
                    {
                        'item': 'chemlib:unstable_gribony',
                        'count':16
                    }
                ]
            }
          ] 
        }
    })

    event.custom({
      'type': 'alchemistry:dissolver',
      'group': 'alchemistry:dissolver',
      'input': {
        'ingredient': {
          'item': 'chemlib:strange_mixture'
        },
        'count': 1
      },
      'output': {
        'rolls': 1,
        'weighted': false,
        'groups': [
          {
              'probability': 100.0,
              'results': [                 
                  {
                      'item': 'chemlib:stabilizing_element',
                      'count':8
                  }
              ]
          }
        ] 
      }
    })

    event.custom({
      'type': 'alchemistry:dissolver',
      'group': 'alchemistry:dissolver',
      'input': {
        'ingredient': {
          'item': 'chemlib:cosmic_mixture'
        },
        'count': 1
      },
      'output': {
        'rolls': 1,
        'weighted': false,
        'groups': [
          {
              'probability': 100.0,
              'results': [                 
                  {
                      'item': 'chemlib:cosmic_element',
                      'count':8
                  }
              ]
          }
        ] 
      }
    })

    event.custom({
      'type': 'alchemistry:dissolver',
      'group': 'alchemistry:dissolver',
      'input': {
        'ingredient': {
          'item': 'avaritia:infinity_ingot'
        },
        'count': 1
      },
      'output': {
        'rolls': 1,
        'weighted': false,
        'groups': [
          {
              'probability': 100.0,
              'results': [                 
                  {
                      'item': 'chemlib:infinity_element',
                      'count':16
                  }
              ]
          }
        ] 
      }
    })

    event.custom({
      'type': 'alchemistry:dissolver',
      'group': 'alchemistry:dissolver',
      'input': {
        'ingredient': {
          'item': 'avaritia:neutronium'
        },
        'count': 1
      },
      'output': {
        'rolls': 1,
        'weighted': false,
        'groups': [
          {
              'probability': 100.0,
              'results': [                 
                    {
                        'item': 'chemlib:neutronium_element',
                        'count': 64
                    },
                    {
                        'item': 'chemlib:neutronium_element',
                        'count': 64
                    },                    
                    {
                        'item': 'chemlib:neutronium_element',
                        'count':16
                    }
              ]
          }
        ] 
      }
    })

    event.custom({
      'type': 'alchemistry:dissolver',
      'group': 'alchemistry:dissolver',
      'input': {
        'ingredient': {
          'item': 'avaritia:neutronium_ingot'
        },
        'count': 1
      },
      'output': {
        'rolls': 1,
        'weighted': false,
        'groups': [
          {
              'probability': 100.0,
              'results': [                 
                  {
                      'item': 'chemlib:neutronium_element',
                      'count':16
                  }
              ]
          }
        ] 
      }
    })

    event.custom({
      'type': 'alchemistry:dissolver',
      'group': 'alchemistry:dissolver',
      'input': {
        'ingredient': {
          'item': 'avaritia:infinity'
        },
        'count': 1
      },
      'output': {
        'rolls': 1,
        'weighted': false,
        'groups': [
          {
              'probability': 100.0,
              'results': [                 
                    {
                        'item': 'chemlib:infinity_element',
                        'count': 64
                    },
                    {
                        'item': 'chemlib:infinity_element',
                        'count': 64
                    },                    
                    {
                        'item': 'chemlib:infinity_element',
                        'count':16
                    }
              ]
          }
        ] 
      }
    })
});