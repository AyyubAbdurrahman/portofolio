<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class ProjectController extends Controller
{
    public function index()
    {
        return Project::all();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required',
            'category' => 'required',
            'description' => 'required',
            'tech_stack' => 'nullable|array',
            'github_link' => 'nullable|url',
            'live_link' => 'nullable|url',
            'thumbnail' => 'nullable|image'
        ]);
        if ($request->hasFile('thumbnail')) {
            $data['thumbnail'] = $request->file('thumbnail')->store('thumbnails', 'public');
        }
        $data['slug'] = Str::slug($data['title']);
        $data['tech_stack'] = json_encode($data['tech_stack'] ?? []);
        $project = Project::create($data);
        return response()->json($project, 201);
    }

    public function update(Request $request, $id)
    {
        $project = Project::findOrFail($id);
        $data = $request->validate([
            'title' => 'sometimes',
            'category' => 'sometimes',
            'description' => 'sometimes',
            'tech_stack' => 'nullable|array',
            'github_link' => 'nullable|url',
            'live_link' => 'nullable|url',
            'thumbnail' => 'nullable|image'
        ]);
        if ($request->hasFile('thumbnail')) {
            if ($project->thumbnail) Storage::disk('public')->delete($project->thumbnail);
            $data['thumbnail'] = $request->file('thumbnail')->store('thumbnails', 'public');
        }
        if (isset($data['tech_stack'])) $data['tech_stack'] = json_encode($data['tech_stack']);
        $project->update($data);
        return response()->json($project);
    }

    public function destroy($id)
    {
        $project = Project::findOrFail($id);
        if ($project->thumbnail) Storage::disk('public')->delete($project->thumbnail);
        $project->delete();
        return response()->json(['message' => 'Deleted']);
    }
}