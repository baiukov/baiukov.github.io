const projectList = []

const projectLinks = [
	"https://github.com/baiukov/DietApplication",
	"https://github.com/baiukov/Bank-application",
	"https://github.com/baiukov/PulsePoint",
	"https://github.com/baiukov/IDEs-website",
	"https://github.com/baiukov/trip-planner",
	"#"
]

const main = () => {

	const projectElements = document.querySelectorAll(".project")

	projectElements.forEach((project) => {

		const elementID = project.id.split("-")
		const projectType = elementID[2]
		const projectID = elementID[1]

		if (!projectType || projectType === "big" || !projectID) return

		projectList.push(project)

		const bigProject = document.getElementById(`project-${projectID}-big`)

		project.addEventListener("click", () => {
			setAllSmall(projectList)

			const projectDescription = bigProject.getElementsByClassName("project-description")[0]

			project.classList.add("invisible")
			show(bigProject, projectDescription)
		})

		if (!Number.isInteger(parseInt(projectID))) return
		bigProject.addEventListener("click", () => {
			window.open(
				projectLinks[parseInt(projectID) - 1],
				'_blank'
			)
		})
	})


}

const setAllSmall = (projectList) => {
	projectList.forEach((currentProject) => {
		const projectID = currentProject.id.split("-")[1]
		const projectBig = document.getElementById(`project-${projectID}-big`)
		projectBig.classList.add("invisible")
		currentProject.classList.remove("invisible")
	})
}

const show = (project, projectDescription) => {
	projectDescription.style.opacity = 0

	project.style.width = "59px"
	project.classList.remove("invisible")
	let px = 59
	const interval = setInterval(() => {
		px += 31.7
		project.style.width = px.toString() + "px"
		if (px >= 376) {
			clearInterval(interval)
			projectDescription.style.opacity = 1
		}
	}, 10)
}

main()