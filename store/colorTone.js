const colorMaps = {
  v: {
    Y: '#eec900',
    YG: '#a8bb00',
    G: '#00a15a',
    GB: '#00857f',
    gB: '#00709b',
    B: '#005ba5',
    V: '#534aa0',
    P: '#81378a',
    RP: '#ad2e6c',
    R: '#d02f48',
    rO: '#e95b23',
    yO: '#f49d00'
  },
  b: {
    Y: '#fad831',
    YG: '#b7c82b',
    G: '#41b879',
    GB: '#00aa9f',
    gB: '#0098b9',
    B: '#2981c0',
    V: '#7574bc',
    P: '#a165a8',
    RP: '#d0678e',
    R: '#ef6c70',
    rO: '#fa8155',
    yO: '#ffad36'
  },
  s: {
    Y: '#debc03',
    YG: '#9cad00',
    G: '#008f56',
    GB: '#00827c',
    gB: '#006f92',
    B: '#005b9b',
    V: '#534c98',
    P: '#7c3d84',
    RP: '#a33c6a',
    R: '#c53f4d',
    rO: '#cc572e',
    yO: '#e19215'
  },
  dp: {
    Y: '#b39300',
    YG: '#748400',
    G: '#007243',
    GB: '#006664',
    gB: '#005476',
    B: '#004280',
    V: '#3e337b',
    P: '#612469',
    RP: '#861d55',
    R: '#a61d39',
    rO: '#ab3d1d',
    yO: '#b16c00'
  },
  lt: {
    Y: '#f2d96e',
    YG: '#c7d36d',
    G: '#85ce9e',
    GB: '#62c0b5',
    gB: '#5bafc4',
    B: '#6c9ac5',
    V: '#9091c3',
    P: '#b088b5',
    RP: '#d98ea5',
    R: '#f19896',
    rO: '#ffa787',
    yO: '#ffbe71'
  },
  sf: {
    Y: '#d3bd6c',
    YG: '#adb66b',
    G: '#76b18a',
    GB: '#54a39b',
    gB: '#5192a4',
    B: '#5d7ea0',
    V: '#7878a0',
    P: '#907194',
    RP: '#b4788b',
    R: '#ca8281',
    rO: '#da927a',
    yO: '#dba66b'
  },
  d: {
    Y: '#ab9446',
    YG: '#858f46',
    G: '#4f8766',
    GB: '#2a7b76',
    gB: '#246a7d',
    B: '#34597d',
    V: '#54527c',
    P: '#6c4a71',
    RP: '#8b4f65',
    R: '#a35a5c',
    rO: '#af6954',
    yO: '#b37f46'
  },
  dk: {
    Y: '#74601f',
    YG: '#525b20',
    G: '#23523a',
    GB: '#004746',
    gB: '#004558',
    B: '#123452',
    V: '#322d51',
    P: '#432848',
    RP: '#612d46',
    R: '#692934',
    rO: '#75362a',
    yO: '#794d1c'
  },
  p: {
    Y: '#f2e6b8',
    YG: '#d8ddad',
    G: '#aed4b9',
    GB: '#a6d4cc',
    gB: '#add1da',
    B: '#afc0d1',
    V: '#bbbdd0',
    P: '#c8b9c9',
    RP: '#dec4ca',
    R: '#e8c2bf',
    rO: '#ebc2b5',
    yO: '#f4d4b0'
  },
  ltg: {
    Y: '#c6bea1',
    YG: '#bdc1a2',
    G: '#9db6a5',
    GB: '#98b6b1',
    gB: '#9eb4b9',
    B: '#9ba5af',
    V: '#a2a2af',
    P: '#aba0ab',
    RP: '#bdacb0',
    R: '#c0abaa',
    rO: '#c1aba5',
    yO: '#cebba8'
  },
  g: {
    Y: '#786f57',
    YG: '#6e725a',
    G: '#53665a',
    GB: '#4e6764',
    gB: '#4f656c',
    B: '#4c5765',
    V: '#565566',
    P: '#605262',
    RP: '#725c63',
    R: '#745c5c',
    rO: '#755c57',
    yO: '#806c5c'
  },
  dkg: {
    Y: '#443e30',
    YG: '#3d4033',
    G: '#2a342e',
    GB: '#273434',
    gB: '#273439',
    B: '#222933',
    V: '#292734',
    P: '#302531',
    RP: '#3d2e34',
    R: '#3e2d30',
    rO: '#3f2e2c',
    yO: '#4a3c32'
  }
}

export const state = () => ({
  selectColor: 'Y',
  tone: 'v',
  colors: colorMaps['v']
})

export const mutations = {
  change(state, tone) {
    state.tone = tone || 'v'
    state.colors = colorMaps[state.tone]
  },
  select(state, color) {
    state.selectColor = color || 'Y'
  }
}

export const getters = {
  selectColor: state => {
    return state.selectColor
  },
  tone: state => {
    return state.tone
  },
  colors: state => {
    return state.colors
  },
  degree: state => {
    switch (state.selectColor) {
      case 'Y':
        return 0
      case 'YG':
        return 30
      case 'G':
        return 60
      case 'GB':
        return 90
      case 'gB':
        return 120
      case 'B':
        return 150
      case 'V':
        return 180
      case 'P':
        return 210
      case 'RP':
        return 240
      case 'R':
        return 270
      case 'rO':
        return 300
      case 'yO':
        return 330
    }
    return 0
  },
  dyad: state => {
    switch (state.selectColor) {
      case 'Y':
        return 'V'
      case 'YG':
        return 'P'
      case 'G':
        return 'RP'
      case 'GB':
        return 'R'
      case 'gB':
        return 'rO'
      case 'B':
        return 'yO'
      case 'V':
        return 'Y'
      case 'P':
        return 'YG'
      case 'RP':
        return 'G'
      case 'R':
        return 'GB'
      case 'rO':
        return 'gB'
      case 'yO':
        return 'B'
    }
    return 'V'
  },
  triad: state => {
    switch (state.selectColor) {
      case 'Y':
        return ['gB', 'RP']
      case 'YG':
        return ['B', 'R']
      case 'G':
        return ['V', 'rO']
      case 'GB':
        return ['P', 'yO']
      case 'gB':
        return ['RP', 'Y']
      case 'B':
        return ['R', 'YG']
      case 'V':
        return ['rO', 'G']
      case 'P':
        return ['yO', 'GB']
      case 'RP':
        return ['Y', 'gB']
      case 'R':
        return ['YG', 'B']
      case 'rO':
        return ['G', 'V']
      case 'yO':
        return ['GB', 'P']
    }
    return ['gB', 'RP']
  },
  splitComplementary: state => {
    switch (state.selectColor) {
      case 'Y':
        return ['B', 'P']
      case 'YG':
        return ['V', 'RP']
      case 'G':
        return ['P', 'R']
      case 'GB':
        return ['RP', 'rO']
      case 'gB':
        return ['R', 'yO']
      case 'B':
        return ['rO', 'Y']
      case 'V':
        return ['yO', 'YG']
      case 'P':
        return ['Y', 'G']
      case 'RP':
        return ['YG', 'GB']
      case 'R':
        return ['G', 'gB']
      case 'rO':
        return ['GB', 'B']
      case 'yO':
        return ['gB', 'V']
    }
    return ['B', 'P']
  },
  analogous: state => {
    switch (state.selectColor) {
      case 'Y':
        return ['yO', 'YG']
      case 'YG':
        return ['Y', 'G']
      case 'G':
        return ['YG', 'GB']
      case 'GB':
        return ['G', 'gB']
      case 'gB':
        return ['GB', 'B']
      case 'B':
        return ['gB', 'V']
      case 'V':
        return ['B', 'P']
      case 'P':
        return ['V', 'RP']
      case 'RP':
        return ['P', 'R']
      case 'R':
        return ['RP', 'rO']
      case 'rO':
        return ['R', 'yO']
      case 'yO':
        return ['rO', 'Y']
    }
    return ['yO', 'YG']
  },
  tetrad: state => {
    switch (state.selectColor) {
      case 'Y':
        return ['GB', 'V', 'R']
      case 'YG':
        return ['gB', 'P', 'rO']
      case 'G':
        return ['B', 'RP', 'yO']
      case 'GB':
        return ['V', 'R', 'Y']
      case 'gB':
        return ['P', 'rO', 'YG']
      case 'B':
        return ['RP', 'yO', 'G']
      case 'V':
        return ['R', 'Y', 'GB']
      case 'P':
        return ['rO', 'YG', 'gB']
      case 'RP':
        return ['yO', 'G', 'B']
      case 'R':
        return ['Y', 'GB', 'V']
      case 'rO':
        return ['YG', 'gB', 'P']
      case 'yO':
        return ['G', 'B', 'RP']
    }
    return ['GB', 'V', 'R']
  }
}
