import {orientation} from './orientation.mjs';
export {orientation};
import {openAsset} from './loader.mjs';
// Runtime bundled into every asset.mjs. The application supplies its installed THREE.
// Compressed resources are relative files; serve this entire directory over HTTP(S).
export const metadata = Object.freeze({orientation,"schema":"asset-web-module/1","itemId":"01-L1-0111","name":"空调室外机 / Outdoor air conditioner condenser unit","defaultState":"off","sourceUpAxis":"Z","units":"metres","geometryEncoding":"float32-le-base64","textureEncoding":"lossless-png","profile":"ARTIC","unifiedMaterials":{"25e0705d01dfdd85e33c5c5ccb806ead3465ee59953062c2700069dad29c2976":{"finish_id":"paint.white.matte","family":"paint","recipe_version":"1.0.0","canonical_material_id":"paint.white.matte","canonical_recipe_sha256":"7098171656ef7ba693470c27f76520227cb521addc0f2dd023418f1ab873790e","mode":"standard","material_source":"Actual final saved native shader; freshly baked PBR channels."},"ed2582c1e53949c5efc0a3f478a9ba80cd7f1237f75a24291c470f80044a1f5f":{"finish_id":"paint.white.matte","family":"paint","recipe_version":"1.0.0","canonical_material_id":"paint.white.matte","canonical_recipe_sha256":"7098171656ef7ba693470c27f76520227cb521addc0f2dd023418f1ab873790e","mode":"standard","material_source":"Actual final saved native shader; freshly baked PBR channels."},"510520184e8d624ee1b3c97df69573c0b28c32d2643421f15fae3a1bf8e70b2b":{"finish_id":"paint.white.matte","family":"paint","recipe_version":"1.0.0","canonical_material_id":"paint.white.matte","canonical_recipe_sha256":"7098171656ef7ba693470c27f76520227cb521addc0f2dd023418f1ab873790e","mode":"standard","material_source":"Actual final saved native shader; freshly baked PBR channels."},"9e2d79c805a4e10ba09c9142c886ce8ae1a8eff8b425d66cc4782c581fce702b":{"finish_id":"paint.white.matte","family":"paint","recipe_version":"1.0.0","canonical_material_id":"paint.white.matte","canonical_recipe_sha256":"7098171656ef7ba693470c27f76520227cb521addc0f2dd023418f1ab873790e","mode":"standard","material_source":"Actual final saved native shader; freshly baked PBR channels."},"65855e7316f074e283da9bb1c288f6b8dc35624324e8b92fac019d43ec7379f9":{"finish_id":"paint.white.matte","family":"paint","recipe_version":"1.0.0","canonical_material_id":"paint.white.matte","canonical_recipe_sha256":"7098171656ef7ba693470c27f76520227cb521addc0f2dd023418f1ab873790e","mode":"standard","material_source":"Actual final saved native shader; freshly baked PBR channels."},"730cebb333f172b4390a65373d645c02b23e702a5d5a451b0593d42bab6cd728":{"finish_id":"paint.white.matte","family":"paint","recipe_version":"1.0.0","canonical_material_id":"paint.white.matte","canonical_recipe_sha256":"7098171656ef7ba693470c27f76520227cb521addc0f2dd023418f1ab873790e","mode":"standard","material_source":"Actual final saved native shader; freshly baked PBR channels."},"3cc52edf0e1d568c8c7d2038979c8b04e3406efea8d2a28a60f6f5db06b9a4bc":{"finish_id":"paint.white.matte","family":"paint","recipe_version":"1.0.0","canonical_material_id":"paint.white.matte","canonical_recipe_sha256":"7098171656ef7ba693470c27f76520227cb521addc0f2dd023418f1ab873790e","mode":"standard","material_source":"Actual final saved native shader; freshly baked PBR channels."},"95b621bad4ecd20f39ba76e4863fd535fd99412d3afdc787e198b3bad3357795":{"finish_id":"paint.white.matte","family":"paint","recipe_version":"1.0.0","canonical_material_id":"paint.white.matte","canonical_recipe_sha256":"7098171656ef7ba693470c27f76520227cb521addc0f2dd023418f1ab873790e","mode":"standard","material_source":"Actual final saved native shader; freshly baked PBR channels."},"6cac8577a0f9aaaf4adcce4040e0430d2920619f7570b25a3f2e15f2bc45ed7f":{"finish_id":"paint.white.matte","family":"paint","recipe_version":"1.0.0","canonical_material_id":"paint.white.matte","canonical_recipe_sha256":"7098171656ef7ba693470c27f76520227cb521addc0f2dd023418f1ab873790e","mode":"standard","material_source":"Actual final saved native shader; freshly baked PBR channels."},"f2a424edd6e60161ab304d147fa9a57cd946ff5e4aecfdae4832bcb7d0f6d145":{"finish_id":"paint.white.matte","family":"paint","recipe_version":"1.0.0","canonical_material_id":"paint.white.matte","canonical_recipe_sha256":"7098171656ef7ba693470c27f76520227cb521addc0f2dd023418f1ab873790e","mode":"standard","material_source":"Actual final saved native shader; freshly baked PBR channels."},"3c1b41866cd5d522fc0b02b912b652c2d151273e2b7ca23e8d05a3fa8e6b2f44":{"finish_id":"appearance.opaque.dark","family":"appearance","recipe_version":"1.0.0","canonical_material_id":"appearance.opaque.dark","canonical_recipe_sha256":"385bfc687c29df4b6776bf228df7256a5775d985833cf590b0059cb86ecca122","mode":"standard","material_source":"Actual final saved native shader; freshly baked PBR channels."},"323a22e6cc99e1b42d34a87c4d4a7c9f7eba57c14f3d535ba23cc20e2c74294e":{"finish_id":"plastic.solid.black","family":"plastic","recipe_version":"1.0.0","canonical_material_id":"plastic.solid.black","canonical_recipe_sha256":"1f38a69a76939f3d7723533ba9ac9f81c878e26399d08274a4d1bc7b8b20e7b1","mode":"standard","material_source":"Actual final saved native shader; freshly baked PBR channels."},"6bb722a620125d2088296c505586f8023da2e72c9e61861528242ff2b7c40e07":{"finish_id":"plastic.solid.black","family":"plastic","recipe_version":"1.0.0","canonical_material_id":"plastic.solid.black","canonical_recipe_sha256":"1f38a69a76939f3d7723533ba9ac9f81c878e26399d08274a4d1bc7b8b20e7b1","mode":"standard","material_source":"Actual final saved native shader; freshly baked PBR channels."},"3ff1036403503a78cca5e179f1a69a3b371961d1b7428e73129355e06fc73286":{"finish_id":"plastic.solid.black","family":"plastic","recipe_version":"1.0.0","canonical_material_id":"plastic.solid.black","canonical_recipe_sha256":"1f38a69a76939f3d7723533ba9ac9f81c878e26399d08274a4d1bc7b8b20e7b1","mode":"standard","material_source":"Actual final saved native shader; freshly baked PBR channels."},"117c15f46c63c422b4b8e29eaeb25f579b4747e0a25436542fcc32211b0b1862":{"finish_id":"plastic.solid.black","family":"plastic","recipe_version":"1.0.0","canonical_material_id":"plastic.solid.black","canonical_recipe_sha256":"1f38a69a76939f3d7723533ba9ac9f81c878e26399d08274a4d1bc7b8b20e7b1","mode":"standard","material_source":"Actual final saved native shader; freshly baked PBR channels."},"f040e27901bc7ea832eeea31d460933b894bab8a76b190d4e7e63f887ac83126":{"finish_id":"appearance.opaque.dark","family":"appearance","recipe_version":"1.0.0","canonical_material_id":"appearance.opaque.dark","canonical_recipe_sha256":"385bfc687c29df4b6776bf228df7256a5775d985833cf590b0059cb86ecca122","mode":"standard","material_source":"Actual final saved native shader; freshly baked PBR channels."},"350db1ee87d91591428a96615e007da3349cab72e0932cd092faf5a3921cdca1":{"finish_id":"appearance.opaque.dark","family":"appearance","recipe_version":"1.0.0","canonical_material_id":"appearance.opaque.dark","canonical_recipe_sha256":"385bfc687c29df4b6776bf228df7256a5775d985833cf590b0059cb86ecca122","mode":"standard","material_source":"Actual final saved native shader; freshly baked PBR channels."},"9257a100506eddc35a4a937ebff1b8c44d859f0c10c0c242dc4ba1e266567f20":{"finish_id":"paint.white.matte","family":"paint","recipe_version":"1.0.0","canonical_material_id":"paint.white.matte","canonical_recipe_sha256":"7098171656ef7ba693470c27f76520227cb521addc0f2dd023418f1ab873790e","mode":"standard","material_source":"Actual final saved native shader; freshly baked PBR channels."},"c6996c0ac285b3613188f5afc958e51c1c19bb4e8cabf5f3ddc6487224286350":{"finish_id":"paint.white.matte","family":"paint","recipe_version":"1.0.0","canonical_material_id":"paint.white.matte","canonical_recipe_sha256":"7098171656ef7ba693470c27f76520227cb521addc0f2dd023418f1ab873790e","mode":"standard","material_source":"Actual final saved native shader; freshly baked PBR channels."},"008ba909990145e9e7438312b397d640db446f47f30144a878e137676c72a939":{"finish_id":"paint.white.matte","family":"paint","recipe_version":"1.0.0","canonical_material_id":"paint.white.matte","canonical_recipe_sha256":"7098171656ef7ba693470c27f76520227cb521addc0f2dd023418f1ab873790e","mode":"standard","material_source":"Actual final saved native shader; freshly baked PBR channels."},"0e53407cb43b54a62f45c9267444728f8fac4b0a26f81e912b91af6329c19d38":{"finish_id":"metal.unspecified.satin","family":"metal","recipe_version":"1.0.0","canonical_material_id":"metal.unspecified.satin","canonical_recipe_sha256":"e32b1ab687c7318041590bc7784849259a0b4a2b3dceb6cfea7e6c6055982313","mode":"standard","material_source":"Actual final saved native shader; freshly baked PBR channels."},"4a9cce661619294cadd867a9e93b7fad443e96d0089eb2edef0cf27777a8306b":{"finish_id":"plastic.solid.black","family":"plastic","recipe_version":"1.0.0","canonical_material_id":"plastic.solid.black","canonical_recipe_sha256":"1f38a69a76939f3d7723533ba9ac9f81c878e26399d08274a4d1bc7b8b20e7b1","mode":"standard","material_source":"Actual final saved native shader; freshly baked PBR channels."},"ec01243fdf880dac8ee8740217c6dd19515578a411769873f05956aa63da8a83":{"finish_id":"paint.white.matte","family":"paint","recipe_version":"1.0.0","canonical_material_id":"paint.white.matte","canonical_recipe_sha256":"7098171656ef7ba693470c27f76520227cb521addc0f2dd023418f1ab873790e","mode":"standard","material_source":"Actual final saved native shader; freshly baked PBR channels."},"6cc7e0a4317a1f9abc0576bd9ee14d0fdd7e83f79080a22f742bfc32e6e4feb6":{"finish_id":"paint.white.matte","family":"paint","recipe_version":"1.0.0","canonical_material_id":"paint.white.matte","canonical_recipe_sha256":"7098171656ef7ba693470c27f76520227cb521addc0f2dd023418f1ab873790e","mode":"standard","material_source":"Actual final saved native shader; freshly baked PBR channels."},"3933c919399e9e6ef71730662479d23381c9cbed0e2c1d73e83608778fb0e151":{"finish_id":"appearance.opaque.dark","family":"appearance","recipe_version":"1.0.0","canonical_material_id":"appearance.opaque.dark","canonical_recipe_sha256":"385bfc687c29df4b6776bf228df7256a5775d985833cf590b0059cb86ecca122","mode":"standard","material_source":"Actual final saved native shader; freshly baked PBR channels."},"90677805dee975e04004d4089a470e74d2226d149e7a6f15ea699df9c7e0ef31":{"finish_id":"paint.white.matte","family":"paint","recipe_version":"1.0.0","canonical_material_id":"paint.white.matte","canonical_recipe_sha256":"7098171656ef7ba693470c27f76520227cb521addc0f2dd023418f1ab873790e","mode":"standard","material_source":"Actual final saved native shader; freshly baked PBR channels."},"ccd0175e6241abf13194daeec8a0b9aafd0704acba0a0d23683ac5f3bf89a35c":{"finish_id":"metal.unspecified.satin","family":"metal","recipe_version":"1.0.0","canonical_material_id":"metal.unspecified.satin","canonical_recipe_sha256":"e32b1ab687c7318041590bc7784849259a0b4a2b3dceb6cfea7e6c6055982313","mode":"standard","material_source":"Actual final saved native shader; freshly baked PBR channels."},"a4556bfbc323655a5d37c72518db2d9849355c6a8e020ceffca90f4b2079c63a":{"finish_id":"paint.white.matte","family":"paint","recipe_version":"1.0.0","canonical_material_id":"paint.white.matte","canonical_recipe_sha256":"7098171656ef7ba693470c27f76520227cb521addc0f2dd023418f1ab873790e","mode":"standard","material_source":"Actual final saved native shader; freshly baked PBR channels."},"8fefd9a6354d8156911968365d2488d0c7f4ca1343190dc11a5e820431c553aa":{"finish_id":"paint.white.matte","family":"paint","recipe_version":"1.0.0","canonical_material_id":"paint.white.matte","canonical_recipe_sha256":"7098171656ef7ba693470c27f76520227cb521addc0f2dd023418f1ab873790e","mode":"standard","material_source":"Actual final saved native shader; freshly baked PBR channels."},"52775fa5ed0bda51d607baec2fc73f54b2a0ce8cb60e3554b200db68813a8a29":{"finish_id":"appearance.opaque.dark","family":"appearance","recipe_version":"1.0.0","canonical_material_id":"appearance.opaque.dark","canonical_recipe_sha256":"385bfc687c29df4b6776bf228df7256a5775d985833cf590b0059cb86ecca122","mode":"standard","material_source":"Actual final saved native shader; freshly baked PBR channels."},"908d2af56c980b371121492caa9b0ae4ed7cc4201bb9329be365b2cc520b9d33":{"finish_id":"appearance.opaque.dark","family":"appearance","recipe_version":"1.0.0","canonical_material_id":"appearance.opaque.dark","canonical_recipe_sha256":"385bfc687c29df4b6776bf228df7256a5775d985833cf590b0059cb86ecca122","mode":"standard","material_source":"Actual final saved native shader; freshly baked PBR channels."},"9b42c0a2c739d12ec9b74c1c52394d4d7265422b52336bf9521fc0cfc4f98582":{"finish_id":"plastic.solid.black","family":"plastic","recipe_version":"1.0.0","canonical_material_id":"plastic.solid.black","canonical_recipe_sha256":"1f38a69a76939f3d7723533ba9ac9f81c878e26399d08274a4d1bc7b8b20e7b1","mode":"standard","material_source":"Actual final saved native shader; freshly baked PBR channels."},"9d5526de7a4013eb336a7ec68996d1cfe9f89523ac0202c53ff4096756b91bbd":{"finish_id":"plastic.solid.black","family":"plastic","recipe_version":"1.0.0","canonical_material_id":"plastic.solid.black","canonical_recipe_sha256":"1f38a69a76939f3d7723533ba9ac9f81c878e26399d08274a4d1bc7b8b20e7b1","mode":"standard","material_source":"Actual final saved native shader; freshly baked PBR channels."},"fc4e6a12b55e04ab506875c4c2cfa522e196790eca238108d2b9efd9108da38d":{"finish_id":"plastic.solid.black","family":"plastic","recipe_version":"1.0.0","canonical_material_id":"plastic.solid.black","canonical_recipe_sha256":"1f38a69a76939f3d7723533ba9ac9f81c878e26399d08274a4d1bc7b8b20e7b1","mode":"standard","material_source":"Actual final saved native shader; freshly baked PBR channels."},"63aab17c2929fe5750e178ab4d7272b0b0eec8fd19527a43a348b6b53a533f23":{"finish_id":"plastic.solid.black","family":"plastic","recipe_version":"1.0.0","canonical_material_id":"plastic.solid.black","canonical_recipe_sha256":"1f38a69a76939f3d7723533ba9ac9f81c878e26399d08274a4d1bc7b8b20e7b1","mode":"standard","material_source":"Actual final saved native shader; freshly baked PBR channels."},"ecd91892a76ebe0b2bcaf714461ff540c8daedf683814ce81d24373159024081":{"finish_id":"plastic.solid.black","family":"plastic","recipe_version":"1.0.0","canonical_material_id":"plastic.solid.black","canonical_recipe_sha256":"1f38a69a76939f3d7723533ba9ac9f81c878e26399d08274a4d1bc7b8b20e7b1","mode":"standard","material_source":"Actual final saved native shader; freshly baked PBR channels."}},"styleV2":{"revision":"deadline-v2-f54a5f8cfd166b57cac7","registry":{"path":"/Users/moonshot/Documents/asset-library/material-unification-v1/research/deadline_controller_20261011/ordinary_batch12/shared_finish_v1/registry.json","sha256":"8f3fa963db7b07443143871206245636cbc7e692aefd407d770944688d8b9ab8"},"mappingSha256":"3463786a2fc1273493e9f64da646d3852400829f3da7ffac37c9da3864c30c45","mode":"standard","sourceStateBlendSha256":{"off":"886df21cf8d32a5dd34ebaab3262987cb0731e672b9048739926fa8a134e1d9f","running":"9e7e04a7a2292cc5da771203f80e911283c555fbe0982d0e8afb76c81ac7eda0"}},"limitations":["Saved states exposed in Web; public parametric generation remains in source/build.py.","Final native PBR channels are finite-resolution UV textures; Cycles and three.js lighting are not pixel-identical.","The native shared library is hash-bound at the registry workspace path."]});
export const availableStates = Object.freeze(["off","running"]);

export async function createAsset(THREE, options = {}) {
  if (!THREE?.Group || !THREE?.BufferGeometry || !THREE?.MeshPhysicalMaterial)
    throw new TypeError('Pass the three.js namespace to createAsset(THREE, options)');
  const requested = options.state ?? metadata.defaultState;
  const session = await openAsset(THREE, new URL('./', import.meta.url), options);
  const DATA = session.data;
  try {
  if (!DATA.states[requested]) throw new RangeError(`Unknown asset state: ${requested}`);
  const geometries = session.geometries, materials = new Map(), textures = session.textures;
  const floats = session.array;
  const root = new THREE.Group();
  root.name = metadata.name;
  root.userData.asset = metadata;
  root.userData.availableStates = [...availableStates];
  if ((options.upAxis ?? 'Y') === 'Y') root.rotation.x = -Math.PI / 2;
  else if (options.upAxis !== 'Z') throw new RangeError('upAxis must be Y or Z');
  const loadTexture = options.loadTexture ?? ((uri) => new THREE.TextureLoader().loadAsync(uri));
  async function texture(id, color) {
    const key = `${id}:${color}`;
    if (!textures.has(key)) textures.set(key, (async () => {
      const t = await session.loadTexture(session.uri(id), loadTexture);
      t.colorSpace = color ? THREE.SRGBColorSpace : THREE.NoColorSpace;
      t.flipY = true; // native Blender UVs, unlike the glTF convention
      t.wrapS = THREE.ClampToEdgeWrapping; t.wrapT = THREE.ClampToEdgeWrapping;
      // Continuous coverage proof bounds the exact level-zero bilinear footprint.
      t.generateMipmaps = false; t.minFilter = THREE.LinearFilter; t.magFilter = THREE.LinearFilter;
      t.needsUpdate = true;
      return t;
    })());
    return textures.get(key);
  }
  async function material(id) {
    if(id===null)return null;
    if (!materials.has(id)) materials.set(id, (async () => {
      const d = DATA.materials[id], p = d.properties;
      const m = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(...p.color), metalness: p.metalness,
        roughness: p.roughness, opacity: p.opacity, transparent: p.transparent,
        ior: p.ior, transmission: p.transmission, clearcoat: p.clearcoat,
        clearcoatRoughness: p.clearcoatRoughness,
        emissive: new THREE.Color(...p.emissive), emissiveIntensity: p.emissiveIntensity,
        specularIntensity: p.specularIntensity, specularColor: new THREE.Color(...p.specularColor),
        sheen: p.sheen ?? 0, sheenColor: new THREE.Color(...(p.sheenColor ?? [1,1,1])),
        sheenRoughness: p.sheenRoughness ?? .5,
        anisotropy: p.anisotropy ?? 0, anisotropyRotation: p.anisotropyRotation ?? 0,
        side: THREE.DoubleSide,
        vertexColors: Boolean(d.vertexColor),
      });
      m.name = d.name; m.userData.blenderMaterial = d.name;
      Object.assign(m.userData, DATA.metadata.unifiedMaterials[id]);
      if (d.vertexColor) m.userData.vertexColorContract = d.vertexColor;
      if (d.vertexColor?.emission_vertex_multiplier) {
        // Three's ordinary vertex color path affects diffuse/alpha only.
        // The native source feeds the same interpolated RGB to emission too.
        m.onBeforeCompile = shader => {
          const token = '#include <emissivemap_fragment>';
          if (shader.fragmentShader.split(token).length !== 2) throw new Error('Unsupported Three emission shader boundary');
          shader.fragmentShader = shader.fragmentShader.replace(token, token + '\n#if defined(USE_COLOR) || defined(USE_COLOR_ALPHA)\n totalEmissiveRadiance *= vColor.rgb;\n#endif\n');
        };
        m.customProgramCacheKey = () => 'native-vertex-rgb-emission-v1';
      }
      for (const [prop, tex] of Object.entries(d.maps))
        m[prop] = await texture(tex, prop === 'map' || prop === 'emissiveMap' || prop === 'specularColorMap');
      return m;
    })());
    return materials.get(id);
  }
  function geometry(id) {
    if (!geometries.has(id)) {
      const d = DATA.geometries[id], g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(floats(d.position), 3));
      g.setAttribute('normal', new THREE.Float32BufferAttribute(floats(d.normal), 3));
      if (d.color) g.setAttribute('color', new THREE.Float32BufferAttribute(floats(d.color), 4));
      const uv = floats(d.uv);
      if (uv.length) g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
      if (d.index) g.setIndex(new THREE.BufferAttribute(floats(d.index), 1));
      for (const [start, count, slot] of d.groups) g.addGroup(start, count, slot);
      g.computeBoundingBox(); g.computeBoundingSphere();
      geometries.set(id, g);
    }
    return geometries.get(id);
  }
  // States are actual saved Blender scenes. Swapping states does not pretend that
  // arbitrary procedural Python parameters are available as JavaScript parameters.
  const stateGroups = new Map();
  const building = new Map();
  let disposed = false;
  async function buildState(name) {
    if (disposed) throw new Error('Asset has been disposed');
    if (stateGroups.has(name)) return;
    await session.prepare(name);
    const state = DATA.states[name];
    await Promise.all([...new Set(state.nodes.flatMap(n => n.materials || []).filter(id => id !== null))].map(material));
    const container = new THREE.Group(); container.name = `state:${name}`;
    const nodes = new Map();
    for (const d of state.nodes) {
      const o = d.geometry
        ? new THREE.Mesh(geometry(d.geometry), await Promise.all(d.materials.map(material)))
        : new THREE.Group();
      o.name = d.name; o.visible = d.visible;
      o.matrix.fromArray(d.matrix); o.matrix.decompose(o.position, o.quaternion, o.scale);
      o.matrixAutoUpdate = false;
      o.userData = {...d.properties, blenderType: d.type, assetNode: d.name};
      o.castShadow = true; o.receiveShadow = true; nodes.set(d.name, o);
    }
    for (const d of state.nodes) (nodes.get(d.parent) ?? container).add(nodes.get(d.name));
    container.visible = name === requested;
    root.add(container); stateGroups.set(name, container);
  }
  async function prepareState(name) {
    if (disposed) throw new Error('Asset has been disposed');
    if (!DATA.states[name]) throw new RangeError(`Unknown asset state: ${name}`);
    if (!building.has(name)) building.set(name, buildState(name).catch(e => {building.delete(name);throw e;}));
    await building.get(name);
    return root;
  }
  for (const name of (options.states === 'lazy' ? [requested] : availableStates)) await prepareState(name);
  root.prepareState = prepareState;
  let switchRequest = 0;
  root.setState = (name) => {
    if (disposed) throw new Error('Asset has been disposed');
    const token = ++switchRequest;
    if (!stateGroups.has(name) && DATA.states[name]) return prepareState(name).then(() => token === switchRequest ? root.setState(name) : root);
    if (!stateGroups.has(name)) throw new RangeError(`Unknown asset state: ${name}`);
    for (const [state, group] of stateGroups) group.visible = state === name;
    root.userData.state = name;
    return root;
  };
  root.getStateObject = (name) => stateGroups.get(root.userData.state).getObjectByName(name);
  root.dispose = async () => {
    if (disposed) return; disposed = true;
    await Promise.allSettled(building.values());
    for (const m of materials.values()) (await m).dispose();
    await session.release();
  };
  root.setState(requested); root.updateMatrixWorld(true);
  return root;
  } catch (error) { await session.release(); throw error; }
}

export default createAsset;
