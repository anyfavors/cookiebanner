module.exports = {
    "branch": "master",
    "plugins": [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        [
            "@semantic-release/changelog",
            {
                "changelogFile": "CHANGELOG.md",
                "changelogTitle": "# Semantic Versioning Changelog"
            }
        ]
        , [
            "@semantic-release/exec",
            {
                "prepareCmd": "zip -r dist.zip dist/"
            }
        ],
        "@semantic-release/npm",
        ["@semantic-release/github", {
            "assets": [
                {"path": "dist.zip", "label": "distribution"}
            ]
        }]
        ,
        ["@semantic-release/git", {
            "assets": ["docs/CHANGELOG.md","package.json"],
        }]
    ],
    "preset": "angular"
}
