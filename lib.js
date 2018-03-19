'use strict'

const Promise = require('pinkie-promise')
const {fetch} = require('fetch-ponyfill')({Promise})
const pkginfo = require('package-json')

const getVersion = async (repo) => {
    // todo
    if(!repo || !repo.file) throw new Error('invalid github repository')

    const packageURL = repo.file('package.json')
    const packageInfo = await (fetch(packageURL).then(res => res.json()).catch(e => null))
    if(!packageInfo) throw new Error('repository / package.json not found')

	const depVersion = packageInfo.dependencies ? packageInfo.dependencies['validate-fptf'] : null
	const devDepVersion = packageInfo.devDependencies ? packageInfo.devDependencies['validate-fptf'] : null

	const validateFPTFVersion = depVersion || devDepVersion
	if(!validateFPTFVersion) throw new Error('validate-fptf not found in dependencies or devDependencies')

	const validateFPTFInfo = await (pkginfo('validate-fptf', {version: validateFPTFVersion, fullMetadata: true}).catch(e => null))
	if(!validateFPTFInfo) throw new Error('matching validate-fptf version not found')

	const fptf = validateFPTFInfo.fptf
	if(!fptf) throw new Error('fptf version not found for given validate-fptf')

    return fptf
}

module.exports = getVersion
